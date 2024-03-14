<template>
  <v-container fluid>
    <v-layout>
      <v-app-bar color="indigo-darken-3" class="pa-0 ma-0">
        <v-app-bar-title class="webPageName flex text-center mx-0">
          Calcula pra mim!
        </v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-row class="mt-1">
          <v-col cols="6" md="3" class="pa-0 d-flex">
            <v-card color="indigo" class="mx-2 mb-3 d-flex flex-grow-1 flex-column">
              <v-card-title
                class="text-h5 text-wrap"
              >
                Conversor de taxa de juros
              </v-card-title>

              <v-card-text
                class="text-wrap"
              >
                Calculadora online para conversão de taxas de juros anual e mensal
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="my-2 ms-2"
                  variant="outlined"
                  rounded="xl"
                  @click="$router.push('/conversordejuros')"
                >
                  Usar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="6" md="3" class="pa-0 d-flex">
            <v-card color="indigo" class="mx-2 mb-3 d-flex flex-grow-1 flex-column">
              <v-card-title
                class="text-h5 text-wrap"
              >
                Expectativas de Mercado
              </v-card-title>

              <v-card-text
                class="text-wrap"
              >
                Projeções de índices como IPCA, Selic, IGP-M e Dólar
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="my-2 ms-2"
                  variant="outlined"
                  rounded="xl"
                  @click="$router.push('/mercado')"
                >
                  Usar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="6" md="3" class="pa-0 d-flex">
            <v-card color="indigo" class="mx-2 mb-3 d-flex flex-grow-1 flex-column">
              <v-card-title
                class="text-h5 text-wrap"
              >
                Minha Mega-Sena
              </v-card-title>

              <v-card-text
                class="text-wrap"
              >
                Ferramenta online para gerenciar seus jogos e conferir seus resultados da Mega-Sena
              </v-card-text>

              <v-card-actions>
                <v-btn
                  disabled
                  class="my-2 ms-2"
                  variant="outlined"
                  rounded="xl"
                >
                  Em breve
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