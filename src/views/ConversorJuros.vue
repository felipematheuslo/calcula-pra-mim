<template>
  <v-container fluid>
    <v-layout>
      <v-app-bar color="indigo-darken-3" class="pa-0 ma-0">
        <v-btn
          size="large"
          icon="mdi-home"
          class="ma-0"
          href="index.html"
        >
        </v-btn>
        <v-app-bar-title class="flex text-center ml-0 mr-14">
          <p class="webPageName"> Calcula pra mim! </p>
        </v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-row justify="center" class="my-3">
          <v-col align="center" class="py-0 mb-3">
            <v-text class="text-wrap text-h5">
              Conversor de Taxas de Juros Anual &harr; Mensal
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="11" class="py-0">
            <v-text class="mb-2 text-wrap">
              <p class="text-justify">
              Calculadora online para ajudar você a converter taxas de juros anuais em taxas de juros 
              mensais, ou o contrário, de forma rápida e precisa.
              </p>
              <p class="text-justify">
              Esta calculadora assume juros compostos e converte as taxas de forma equivalente.
              </p>
              <br/>
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col align="center" class="pa-0">
            <v-card
              color="indigo-darken-2"
              variant="outlined"
              max-width="500"
              class="mx-2 py-1"
            >
              <v-card-title class="pb-0 text-wrap">
                Escolha qual conversão deseja realizar:
              </v-card-title>

              <v-card-item class="pt-0">
                <v-radio-group inline v-model="radios">
                  <v-radio label="Anual → Mensal" value="true" @change="feeCalculated=0"></v-radio>
                  <v-radio label="Mensal → Anual" value="false" @change="feeCalculated=0"></v-radio>
                </v-radio-group>

                <v-row justify="center">
                  <v-col cols="12" sm="11" align="center">
                    <v-text-field
                      hide-details
                      label="Valor da taxa de juros (%)"
                      type="number"
                      v-model="fee"
                      :suffix="radios == 'true' ? '% a.a.' : '% a.m.'"
                      variant="outlined"
                      @change="calculate"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col align="center">
                    <v-btn
                      label="Valor da taxa de juros (%)"
                      variant="flat"
                      color="indigo-darken-1"
                      append-icon="mdi-calculator"
                      size="large"
                      @click="calculate"
                    >
                      Calcular
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" sm="11" align="center">
                    <v-text-field
                      hide-details
                      readonly
                      label="Resultado:"
                      base-color="red-darken-4"
                      type="number"
                      v-model="feeCalculated"
                      :suffix="radios == 'true' ? '% a.m.' : '% a.a.'"
                      variant="outlined"
                      @change="calculate"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="11" class="py-0">
            <v-text class="mb-2 text-wrap">
              <br/>
              <p class="text-center text-h6">
              <b>Instruções de Uso:</b>
              </p>
              <br/>
              <p>
              <b>Selecione a conversão</b>: Selecione se deseja realizar a conversão da taxa de juros anual 
              para mensal ou mensal para anual.
              </p>
              <p>
              <b>Digite a taxa de juros (em porcentagem)</b>: Insira a taxa de juros que você 
              deseja converter. Por exemplo, se a taxa for de 10%, insira "10".
              </p>
              <p>
              <b>Clique em "Calcular"</b>: Depois de inserir a taxa de juros, clique no botão "Calcular" 
              para obter o equivalente na outra taxa de juros.
              </p>
              <p>
              <b>Resultado</b>: O resultado será exibido imediatamente abaixo do botão de cálculo, indicando 
              a taxa de juros correspondente à taxa fornecida.
              </p>
            </v-text>
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
      fee: '',
      feeCalculated: '0',

      radios: 'true',
    }
  },
  mounted () {
  },
  methods: {
    calculate () {
      if (this.radios == 'true'){
        this.feeCalculated = Math.pow((1 + (this.fee / 100)), (1 / 12))
        this.feeCalculated -= 1
        this.feeCalculated *= 100
      }
      else{
        this.feeCalculated = Math.pow((1 + (this.fee / 100)), 12)
        this.feeCalculated -= 1
        this.feeCalculated *= 100
      }
    },
  },
  setup() {
    useHead({
      title: 'Calcula pra mim! - Conversor de juros',
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
  font-size: 30px
}
.v-selection-control-group {
  justify-content: center;
}
</style>