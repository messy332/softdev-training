<script setup>
import { ref } from 'vue'
import LogoCSUCC from '@/assets/logo/logo-csu-cc.png'
import LogoMain from '@/assets/logo/CEIT.png'
import LogoLits from '@/assets/logo/logo.png'
import LogoCeit from '@/assets/logo/main.png'
import BackGround from '@/assets/logo/campus.png'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <div class="d-flex align-items-start justify-content-start">
          <v-img :src="LogoCSUCC" width="50" height="50" class="mb--1"></v-img>
          <v-img :src="LogoCeit" width="50" height="50" class="mb--1"></v-img>
          <v-img :src="LogoMain" width="50" height="50" class="mb--1"></v-img>
          <v-img :src="LogoLits" width="50" height="50" class="mb--1"></v-img>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text=""
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-img :src="BackGround" height="100vh" cover>
          <v-container>
            <slot name="content"></slot>
          </v-container>
        </v-img>
      </v-main>
    </v-app>
  </v-responsive>
</template>
