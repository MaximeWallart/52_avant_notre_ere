<script setup lang="ts">
const props = defineProps({
  nom: {
    type: String,
    require: true,
  },
  specialite: {
    type: String,
    required: true
  },
  deniers: {
    type: Number
  }
});
</script>
<template>
<div class="rounded-lg bg-[#C59849] h-24 w-max p-5 m-1">
  <h1 class="font-extrabold">{{props.nom}}</h1>
  <h2>{{props.specialite}}</h2>
  <h2 v-if="deniers != null">{{props.deniers}}</h2>
</div>
</template>
