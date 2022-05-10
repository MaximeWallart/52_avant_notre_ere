<script setup lang="ts">
import Gladiateur from "./Gladiateur.vue";
import PlusIcon from "~icons/ic/outline-plus";
import Popup from "./Popup.vue";
import GladForm from "./GladForm.vue";

import { useApi } from "../composables/useApi";

const props = defineProps({
  ludiId: {
    type: String,
    required: true,
  },
});

const { getGladiateurs } = useApi();

const gladiateurs= ref();

const popupTrigger = ref(false);

const TogglePopup = () => {
  popupTrigger.value = !popupTrigger.value;
};

onMounted(async () => {
  gladiateurs.value = await getGladiateurs(props.ludiId);
});
</script>
<template>
  <ul>
    <div v-for="glad in gladiateurs" :key="gladiateurs.id">
      <li class="glad">
        <Gladiateur :nom="glad.nom" :adresse="glad.adresse" :force="glad.force" :equilibre="glad.equilibre" :vitesse="glad.vitesse" :strategie="glad.strategie" />
      </li>
    </div>

    <li class="glad">
      <div
        class="bg-[#50CEAE] text-white w-1/4 rounded-lg h-32 w-24 relative m-1"
        @click="TogglePopup"
      >
        <PlusIcon class="absolute top-1/3 right-8 text-2xl" />
      </div>
    </li>
  </ul>
  <Popup
    v-if="popupTrigger"
    :TogglePopup="
      () => {
        TogglePopup();
      }
    "
  >
    <GladForm :ludiId="ludiId" />
  </Popup>
</template>
<style>
.glad {
  float: left;
}
</style>
