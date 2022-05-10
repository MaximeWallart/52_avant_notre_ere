<script setup lang="ts">
import EyeOpen from "~icons/ph/eye-light";
import EyeClose from "~icons/ph/eye-slash";
import AccountIcon from '~icons/mdi/account-circle'
import { useApi } from '../composables/useApi'
import router from "@/router";
import { resolve } from "path";

const { t } = useI18n()


const email = ref();
const hidePassword = ref(true);
const password = ref();
const id = ref();

const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const { connect } = useApi()

async function log() { 
  const id = ref()
  async function promise() {
    return new Promise(() => {
      id.value = connect(email.value,password.value)
    })
  }
  promise().then(() => {router.push('/' + id.value)})
}
</script>
<template>
  <div id="login">
    <div id="form">
    <h1 class="">{{ t('login') }}</h1>
      <form @submit.prevent="log">
        <label for="email">{{ t('email') }}</label>
        <input
          type="text"
          id="email"
          v-model="email"
          placeholder="name@email.com"
          autocomplete="off"
        />

        <label for="password">{{ t('password') }}</label>

        <div class="flex flex-row">
          <input
            :type="passwordFieldType"
            id="password"
            v-model="password"
            :placeholder="t('password')"
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

        <button type="submit">{{ t('log-in') }}</button>
      </form>
    </div>
  </div>
</template>
<style>
div#app div#login {
  position: absolute;
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
