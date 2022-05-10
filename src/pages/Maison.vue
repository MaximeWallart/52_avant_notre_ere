<script setup>
    import Login from '../components/Login.vue'
    import Ludis from '../components/Ludis.vue'
    import Gladiateurs from '../components/Gladiateurs.vue'
    import PopupVue from '@/components/Popup.vue';
</script>
<template>
    test
    <ul>
        <li class="block">
            <Ludis lanisteId="1" />
        </li>
        <li class="block">
            <Gladiateurs ludiId="1" />
        </li>
    </ul>
    <!-- <Login /> -->
</template>