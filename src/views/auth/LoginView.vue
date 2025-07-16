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
const visible = ref(false)
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
            <v-row>
              <v-col cols="12" class="d-flex flex-column align-center justify-center">
                <div>
                  <v-card
                    class="mx-auto pa-12 pb-8 mt-15 border-md"
                    elevation="8"
                    max-width="500"
                    rounded="lg"
                  >
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <div class="mx-auto" max-width="344">
                      <v-text-field
                        hide-details="auto"
                        placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="plain"
                        class="border-b-md"
                      ></v-text-field>
                    </div>
                    <br /><br />

                    <div
                      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                    >
                      Password

                      <a
                        class="text-caption text-decoration-none text-black mt-10"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Forgot password?</a
                      >
                    </div>

                    <v-text-field
                      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                      :type="visible ? 'text' : 'password'"
                      density="compact"
                      placeholder="Enter your password"
                      hide-details
                      prepend-inner-icon="mdi-lock-outline"
                      variant="plain"
                      class="border-b-md"
                      @click:append-inner="visible = !visible"
                    ></v-text-field>
                    <br /><br />

                    <v-btn prepend-icon="mdi-login" class="mb-8" color="green" size="large" block>
                      Log In
                    </v-btn>

                    <v-card-text class="text-center">
                      <a
                        class="text-black text-decoration-none"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                      </a>
                    </v-card-text>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-main>
    </v-app>
  </v-responsive>
</template>
