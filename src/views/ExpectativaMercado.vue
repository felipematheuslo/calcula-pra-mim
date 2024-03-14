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
      </v-app-bar>

      <v-main>
      <v-row justify="center" class="my-3">
          <v-col align="center" class="py-0 mb-3">
            <v-text class="text-wrap text-h5 text-indigo">
              Expectativas de mercado
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="10" align="center" class="py-0">
            <v-text class="mb-2 text-wrap text-indigo">
              <p class="text-justify">
                Projeções dos principais índices do mercado brasileiro para os próximos anos, baseado em relatórios de pesquisa semanal realizada junto a diversas instituições financeiras, como bancos, corretoras e consultorias.
              </p>
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-3">
          <v-col cols="12" md="10" align="center" class="pa-0">
            <v-card
              color="indigo-darken-1"
              variant="outlined"
              class="mx-2 py-1"
            >
              <v-data-table
                :headers="headers"
                :items="boats"
                items-per-page="-1"
              >
              </v-data-table>

              <v-card-text class="pb-0">
                Fonte: 
                
                <a href="https://www.bcb.gov.br/publicacoes/focus" target="_blank" rel="noopener noreferrer">
                Relatório Focus - Banco Central do Brasil
                </a>
              </v-card-text>

              <v-card-subtitle>
                Atualizado em: 08/03/2024
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>

import { useHead } from '@vueuse/head'

export default {
  data () {
    return {
      headers: [
        { title: 'Índice', align: 'center', key: 'indice', sortable: false },
        { title: '2024', align: 'center', key: 'ano0', sortable: false },
        { title: '2025', align: 'center', key: 'ano1', sortable: false },
        { title: '2026', align: 'center', key: 'ano2', sortable: false },
        { title: '2027', align: 'center', key: 'ano3', sortable: false },
      ],
      boats: [
        {
          indice: 'Dólar (R$/US$)',
          ano0: '4.93',
          ano1: '5.00',
          ano2: '5.04',
          ano3: '5.10',
        },
        {
          indice: 'Selic (% a.a)',
          ano0: '9.00',
          ano1: '8.50',
          ano2: '8.50',
          ano3: '8.50',
        },
        {
          indice: 'IPCA (variação%)',
          ano0: '3.77',
          ano1: '3.51',
          ano2: '3.50',
          ano3: '3.50',
        },
        {
          indice: 'IGP-M (variação%)',
          ano0: '2.80',
          ano1: '3.80',
          ano2: '3.90',
          ano3: '3.80',
        },
      ],
    }
  },
  mounted () {
  },
  methods: {
  },
  setup() {
    useHead({
      title: 'Calcula pra mim! - Expectativas de mercado',
      meta: [
        {
          name: 'description',
          content: 'My website',
        },
      ],
    })
  },
};
</script>

<style>
.webPageName {
  font-family: 'Brush Script MT', cursive;
  font-size: 29px
}
.v-data-table-header__content {
  font-weight: bolder;
}
.v-data-table-footer {
  display: none;
}
</style>