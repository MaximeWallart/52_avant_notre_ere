<script setup lang="ts">
    import Login from '../components/Login.vue'
    import Ludis from '../components/Ludis.vue'
    import Gladiateurs from '../components/Gladiateurs.vue'
    import PopupVue from '@/components/Popup.vue';
import { number } from '@intlify/core-base';

const { t } = useI18n()

defineProps({
  lanisteid: {
    type: String,
    required: true
  }
})
</script>
<template>
    <h1 class="text-5xl font-extrabold p-4">{{ t('52-avant-notre-ere-les-jeux-du-cirque') }}</h1>
    <ul class="relative">
        <li display="flex">
            <Ludis :lanisteId="lanisteid" />
        </li>
        <li class="inline">
            <Gladiateurs ludiId="1" />
        </li>
    </ul>
    <!-- <Login /> -->
</template>