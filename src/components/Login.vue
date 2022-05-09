<script setup lang="ts">
import EyeOpen from "~icons/ph/eye-light";
import EyeClose from "~icons/ph/eye-slash";

const email = ref();
const hidePassword = ref(true);
const password = ref();
const id = ref();

const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

function connect() {
  fetch('http://localhost:3000/lanistes?email='+ email.value + '&password=' + password.value, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert(
          "Server returned " + response.status + " : " + response.statusText
        );
      }
    })
    .then((response) => {
      console.log(response[0])
      if(response[0] != undefined) {
        id.value = response[0].id;
        alert(id.value)
      }
      else{
        alert("Identifiants invalides")
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>
<template>
  <div id="login">
    <div id="form">
      <form @submit.prevent="connect">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="name@email.com"
          autocomplete="off"
        />

        <label for="password">Password</label>

        <div class="flex flex-row">
          <input
            :type="passwordFieldType"
            id="password"
            v-model="password"
            placeholder="Password"
          />
          <div
            @click="
              () => {
                hidePassword = !hidePassword;
              }
            "
            class="border-b border-[#ecf0f178] mb-5"
          >
            <div :hidden="!hidePassword"><EyeOpen /></div>
            <div :hidden="hidePassword"><EyeClose /></div>
          </div>
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  </div>
</template>
<style>
div#app div#login {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

div#app div#login div#form {
  background-color: #34495e;
  border-radius: 5px;
  box-shadow: 0px 0px 30px 0px #666;
  color: #ecf0f1;
  width: 260px;
  padding: 35px;
}

div#app div#login div#form label,
div#app div#login div#form input {
  outline: none;
  width: 100%;
}

div#app div#login div#form label {
  color: #ecf0f1;
  font-size: 0.8em;
}

div#app div#login div#form input {
  background-color: transparent;
  border-bottom: 1px solid #ecf0f178;
  color: #ecf0f1;
  font-size: 1em;
  margin-bottom: 20px;
}

div#app div#login div#form ::placeholder {
  color: #ecf0f178;
  opacity: 1;
}

div#app div#login div#form button {
  background-color: #ffffff;
  color: #34495e;
  cursor: pointer;
  border: none;
  padding: 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
}

div#app div#login div#form button:hover {
  background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
  div#app div#login {
    align-items: unset;
    background-color: unset;
    display: unset;
    justify-content: unset;
  }

  div#app div#login div#description {
    margin: 0 auto;
    max-width: 350px;
    width: 100%;
  }

  div#app div#login div#form {
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
  }

  div#app div#login div#form form {
    margin: 0 auto;
    max-width: 280px;
    width: 100%;
  }
}
</style>
