<script setup lang="ts">
import { useApi } from "../composables/useApi";

const props = defineProps({
  ludiId: {
    type: String,
    required: true,
  },
});

const { postGladiateur, getIdOfLastGlad } = useApi();

const nom = ref();
const adresse = ref();
const force = ref();
const equilibre = ref();
const vitesse = ref();
const strategie = ref();

async function createGlad() {
  const id = (await getIdOfLastGlad()) + 1;
  const body = JSON.stringify({
    id: id,
    nom: nom.value,
    adresse: adresse.value,
    force: force.value,
    equilibre: equilibre.value,
    vitesse: vitesse.value,
    strategie: strategie.value,
    ludiId: props.ludiId,
  });
  postGladiateur(body);
}
</script>
<template>
  <div>
    <div id="form">
      <form>
        <h2>Créer un Gladiateur</h2>
        <label for="nom">Nom</label>
        <input
          type="text"
          id="email"
          placeholder="Nom"
          v-model="nom"
          autocomplete="off"
        />
        <br>
        <label for="adresse">Adresse</label>
        <input
          type="text"
          id="adresse"
          placeholder="Adresse"
          v-model="adresse"
          autocomplete="off"
        />
        <br>
        <label for="force">Force : </label>
        <input type="radio" id="0" name="force" value=0 v-model="force" checked><label for="0">0</label>
        <input type="radio" id="1" name="force" value=1 v-model="force" ><label for="1">1</label>
        <input type="radio" id="2" name="force" value=2 v-model="force" ><label for="2">2</label>
        <input type="radio" id="3" name="force" value=3 v-model="force" ><label for="3">3</label>
        <br>
        <label for="equilibre">Équilibre : </label>
        <input type="radio" id="0" name="equilibre" value=0 v-model="equilibre" checked><label for="0">0</label>
        <input type="radio" id="1" name="equilibre" value=1 v-model="equilibre" ><label for="1">1</label>
        <input type="radio" id="2" name="equilibre" value=2 v-model="equilibre" ><label for="2">2</label>
        <input type="radio" id="3" name="equilibre" value=3 v-model="equilibre" ><label for="3">3</label>
        <br>
        <label for="vitesse">Vitesse : </label>
        <input type="radio" id="0" name="vitesse" value=0 v-model="vitesse" checked><label for="0">0</label>
        <input type="radio" id="1" name="vitesse" value=1 v-model="vitesse" ><label for="1">1</label>
        <input type="radio" id="2" name="vitesse" value=2 v-model="vitesse" ><label for="2">2</label>
        <input type="radio" id="3" name="vitesse" value=3 v-model="vitesse" ><label for="3">3</label>
        <br>
        <label for="strategie">Stratégie : </label>
        <input type="radio" id="0" name="strategie" value=0 v-model="strategie" checked><label for="0">0</label>
        <input type="radio" id="1" name="strategie" value=1 v-model="strategie" ><label for="1">1</label>
        <input type="radio" id="2" name="strategie" value=2 v-model="strategie" ><label for="2">2</label>
        <input type="radio" id="3" name="strategie" value=3 v-model="strategie" ><label for="3">3</label>
        <br>
        <button
          type="submit"
          @click="createGlad()"
          @click.prevent="$emit('close')"
        >
          Créer
        </button>
      </form>
    </div>
  </div>
</template>
