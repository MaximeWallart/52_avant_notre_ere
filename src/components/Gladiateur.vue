<script setup lang="ts">
const props = defineProps({
  nom: {
    type: String,
    require: true,
  },
  adresse: {
    type: String,
    required: true
  },
  force: {
    type: Number,
    required: true
  },
  equilibre: {
    type: Number,
    required: true
  },
  vitesse: {
    type: Number,
    required: true
  },
  strategie: {
    type: Number,
    required: true
  },
});
</script>
<template>
<div class="rounded-lg bg-[#84DCC6] h-32 w-max p-5 m-1">
  <h1 class="font-extrabold">{{props.nom}}</h1>
  <h2>Adresse : {{props.adresse}}</h2>
  <h3>Force : {{props.force}} | Équilibre : {{props.equilibre}}</h3>
  <h3>Vitesse : {{props.vitesse}} | Stratégie : {{props.strategie}}</h3>
</div>
</template>
