<script setup lang="ts">
import { useApi } from "../composables/useApi";

const props = defineProps({
  lanisteId: {
    type: String,
    required: true,
  },
});

const { postLudi, getIdOfLastLudi } = useApi();

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
      <form>
        <h2>Créer un Ludi</h2>
        <label for="nom">Nom</label>
        <input
          type="text"
          id="email"
          placeholder="Nom"
          v-model="nom"
          autocomplete="off"
        />

        <label for="specialite">Specialité</label>
        <input
          type="text"
          id="specialite"
          placeholder="Spécialité"
          v-model="specialite"
          autocomplete="off"
        />
        <button
          type="submit"
          @click="createLudi()"
          @click.prevent="$emit('close')"
        >
          Créer
        </button>
      </form>
    </div>
  </div>
</template>
