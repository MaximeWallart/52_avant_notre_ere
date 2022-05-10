<script setup lang="ts">
    import CrossIcon from '~icons/akar-icons/cross'

    defineProps(['TogglePopup'])
</script>
<template>
    <div class="background">
        <div class="popup">
            <CrossIcon class="cross" @click="TogglePopup"/>
            <slot />
        </div>
    </div>
</template>
<style>
.background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
}
.popup {
    top: 20%;
    background-color: white;
    border-radius: 6px;
    width: 50%;
    margin: auto;
    position: relative;
    padding: 3%;
    min-height: 25%;
}
.cross {
    margin: 0;
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>