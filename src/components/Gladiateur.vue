<script setup lang="ts">
const { t } = useI18n()

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
  <h2>{{t('adresse')}} {{props.adresse}}</h2>
  <h3>{{t('force')}} {{props.force}} | {{t('equilibre')}} {{props.equilibre}}</h3>
  <h3>{{t('vitesse')}} {{props.vitesse}} | {{t('strategie')}} {{props.strategie}}</h3>
</div>
</template>
