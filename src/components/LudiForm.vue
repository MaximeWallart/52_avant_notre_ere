<script setup lang="ts">
import { useApi } from "../composables/useApi";

const props = defineProps({
  lanisteId: {
    type: String,
    required: true,
  },
});

const { postLudi, getIdOfLastLudi } = useApi();

const { t } = useI18n()

const nom = ref();
const specialite = ref();

async function createLudi() {
  const id = (await getIdOfLastLudi()) + 1;
  const body = JSON.stringify({
    id: id,
    nom: nom.value,
    specialite: specialite.value,
    lanisteId: props.lanisteId,
    deniers: 10,
  });
  postLudi(body);
}
</script>
<template>
  <div>
    <div id="form">
      <form @submit.prevent="createLudi">
        <h2>{{ t('creer-un-ludi') }}</h2>
        <label for="nom">{{t('nom')}}</label>
        <input
          type="text"
          id="email"
          :placeholder="t('nom')"
          v-model="nom"
          autocomplete="off"
        />

        <label for="specialite">{{ t('specialite') }} </label>
        <input
          type="text"
          id="specialite"
          :placeholder="t('specialite')"
          v-model="specialite"
          autocomplete="off"
        />
        <button
          type="submit"
          @click="createLudi()"
          @click.prevent="$emit('close')"
        >
          {{t('creer')}}
        </button>
      </form>
    </div>
  </div>
</template>
