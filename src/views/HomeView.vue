<template>
  <v-container fluid>
    <v-layout>
      <v-app-bar color="indigo-darken-3" class="pa-0 ma-0">
        <v-btn
          size="large"
          icon="mdi-home"
          class="ma-0"
          @click="$router.push('/')"
        >
        </v-btn>
        <v-app-bar-title class="webPageName flex text-center mx-0">
          Calcula pra mim!
        </v-app-bar-title>
        <v-btn
          size="large"
          icon="mdi-information"
          class="ma-0"
        >
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-row class="mt-1">
          <v-col cols="12" md="4" class="pa-0">
            <v-card color="indigo" class="mx-2 mb-3">
              <v-card-title
                class="text-h5 text-wrap"
              >
                Conversor de taxa de juros
              </v-card-title>

              <v-card-subtitle
                class="text-h5 text-wrap"
              >
                % a.m. ↔ % a.a.
              </v-card-subtitle>

              <v-card-text
                class="text-wrap"
              >
                <p> Calculadora para conversão de taxas de juros </p>
                <p> Anual para Mensal e Mensal para Anual </p>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="my-2 ms-2"
                  variant="outlined"
                  outlined
                  append-icon="mdi-chevron-right"
                  @click="$router.push('/conversordejuros')"
                >
                  Usar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>

import { useHead } from '@vueuse/head'

export default ({
  setup() {
    useHead({
      title: 'Calcula pra mim!',
      meta: [
        {
          name: 'description',
          content: 'My website',
        },
      ],
    })
  },
})
</script>

<style>
.webPageName {
  font-family: 'Brush Script MT', cursive;
  font-size: 29px
}
</style>