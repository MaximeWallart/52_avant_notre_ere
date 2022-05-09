<script setup lang="ts">
let result = "i";
let responseAvailable: Boolean = false;

function fetchData() {
  responseAvailable = false;
  fetch("http://localhost:3000/lanistes", {
    method: "GET",
  })
    .then((response) => {
        console.log("on rentre")
      if (response.ok) {
          console.log("ça passe")
        return response.json();
      } else {
        alert(
          "Server returned " + response.status + " : " + response.statusText
        );
      }
    })
    .then((response) => {
      result = response[0].email;
      responseAvailable = true;
      console.log(result)
      return result
    })
    .catch((err) => {
      console.log(err);
    });
    console.log(result)
    return result
}
</script>
<template>
    <button type="button" @click="fetchData">Choper les résultats</button>
    <div v-if="responseAvailable">
        {{result}}
    </div>
</template>
