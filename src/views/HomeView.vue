<script setup>
import { ref } from 'vue'
import LogoCSUCC from '@/assets/logo/logo-csu-cc.png'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="responsive" max-height="100vh">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Mode"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" class="d-flex flex-column align-center justify-center">
              <v-img :src="LogoCSUCC" width ="200" height="200" class="mb-5 mt-10"></v-img>
              <h1 class="text-h1 text-center font-weight-bold">Hello CSUCC</h1>
              <v-btn prepend-icon="mdi-login" class="mt-5" size="x-large" color="green" elevetion="10"
              to="/login"> Login Here!</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style></style>
