<template>
  <v-container fluid>
    <v-layout>
      <v-app-bar color="indigo-darken-3" class="pa-0 ma-0">
        <v-app-bar-title class="flex text-center pa-0 ma-0">
          <p class="webPageName"> Calcula pra mim! </p>
        </v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-row justify="center" class="mb-4">
          <v-col>
            <v-text class="text-wrap">
              <p class="text-h6 text-center mb-1">
              <b>Bem-vindo ao Calcula pra mim!</b>
              </p>
              <p>
              Aqui, você encontrará uma variedade de informações e ferramentas projetadas para simplificar cálculos 
              financeiros complexos, desde a conversão de taxas de juros até a correção de valores ao longo do tempo.
              </p>
              <p>
              Nossa missão é proporcionar uma experiência fácil e eficiente, para que você possa tomar decisões 
              financeiras sem o estresse de cálculos difíceis.
              </p>
            </v-text>
          </v-col>
        </v-row> 
        <v-row class="mt-1">
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
                Projeções de índices como IPCA, Selic, IGP-M e Dólar para os próximos anos
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="my-2 ms-2"
                  variant="outlined"
                  rounded="xl"
                  href="mercado.html"
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
                Conversor de taxa de juros
              </v-card-title>

              <v-card-text
                class="text-wrap"
              >
                Calculadora online para conversão entre taxas de juros anual e mensal com capitalização
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="my-2 ms-2"
                  variant="outlined"
                  rounded="xl"
                  href="conversordejuros.html"
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
                Correção de valores por índice + taxa
              </v-card-title>

              <v-card-text
                class="text-wrap"
              >
                Calculadora online para correção de valores baseados em índices como IPCA, Selic e IGP-M com ou sem taxa adicional
              </v-card-text>

              <v-card-actions>
                <v-btn
                  disabled
                  class="my-2 ms-2"
                  variant="outlined"
                  rounded="xl"
                  href="correcaodevalores.html"
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
export default ({
})
</script>

<style>
.webPageName {
  font-family: 'Brush Script MT', cursive;
  font-size: 30px
}
</style>