<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { useI18n } from 'vue-i18n';
import { useCycleList } from '@vueuse/core';

const { availableLocales, locale, t} = useI18n()
const { next: nextLang } = useCycleList(availableLocales, { initialValue: locale  })

</script>

<template>
  <div class="bg-gradient-to-br from-[#EBDCC1] to-[#9F939A] min-h-screen">
    <div class="absolute right-3 top-3">
      <button class="bg-violet-700 text-white py-1 px-3 rounded" @click="() => locale =  nextLang()">{{t('change-language')}}</button>
    </div>
    <RouterView />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
