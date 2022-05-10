<script setup lang="ts">
import Ludi from "./Ludi.vue";
import PlusIcon from "~icons/ic/outline-plus";
import Popup from "./Popup.vue";
import LudiForm from "./LudiForm.vue";

import { useApi } from "../composables/useApi";

const props = defineProps({
  lanisteId: {
    type: String,
    required: true,
  },
});

const { getLudis } = useApi();

const ludis = ref();

const popupTrigger = ref(false);

const TogglePopup = () => {
  popupTrigger.value = !popupTrigger.value;
};

onMounted(async () => {
  console.log(props.lanisteId)
  ludis.value = await getLudis(props.lanisteId);
});
</script>
<template>
  <ul>
    <div v-for="ludi in ludis" :key="ludis.id">
      <li class="ludi">
        <Ludi :nom="ludi.nom" :specialite="ludi.specialite" />
      </li>
    </div>

    <!-- <li class="ludi">
      <div
        class="bg-[#AB8036] text-white w-1/4 rounded-lg h-24 w-24 relative m-1"
        @click="TogglePopup"
      >
        <PlusIcon class="absolute top-1/3 right-8 text-2xl" />
      </div>
    </li> -->
  </ul>
  <Popup
    v-if="popupTrigger"
    :TogglePopup="
      () => {
        TogglePopup();
      }
    "
  >
    <LudiForm :lanisteId="lanisteId" />
  </Popup>
</template>
<style>
.ludi {
  float: left;
}
</style>
