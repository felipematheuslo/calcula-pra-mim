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
              Correção de Valores por Índices de Preço
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col align="center" class="pa-0">
            <v-card
              color="indigo-darken-2"
              variant="outlined"
              elevation="10"
              max-width="500"
              class="mx-2 py-1"
            >
              <v-card-item>
                <v-row justify="center" class="mt-0">
                  <v-col cols="12" align="left">
                    <v-select
                      v-model="indexValue"
                      hide-details
                      :items="indexItens"
                      variant="outlined"
                      label="Índice para correção"
                    >
                    </v-select>
                  </v-col>
                </v-row>
                
                <v-row justify="center">
                  <v-col cols="12" align="center">
                    <v-text-field
                      v-model="fee"
                      hide-details
                      clearable
                      label="Taxa adicional"
                      type="number"
                      suffix="% a.m."
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" sm="6" align="center" class="d-flex">
                    <v-select
                      v-model="initialDate_Month"
                      hide-details
                      :items="monthsList"
                      variant="outlined"
                      label="Data inicial *"
                    >
                    </v-select>
                    <v-select
                      v-model="initialDate_Year"
                      hide-details
                      :items="yearsList"
                      variant="outlined"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6" align="center" class="d-flex">
                    <v-select
                      v-model="finalDate_Month"
                      hide-details
                      :items="monthsList"
                      variant="outlined"
                      label="Data final"
                    >
                    </v-select>
                    <v-select
                      v-model="finalDate_Year"
                      hide-details
                      :items="yearsList"
                      variant="outlined"
                    >
                    </v-select>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" align="center">
                    <v-text-field
                      v-model="initialValue"
                      hide-details
                      clearable
                      label="Valor a ser corrigido"
                      type="number"
                      prefix="R$"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col align="center">
                    <v-btn
                      variant="flat"
                      color="indigo-darken-1"
                      append-icon="mdi-calculator"
                      size="large"
                      @click="calculate"
                    >
                      Corrigir valor
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col cols="12" align="center">
                    <v-text-field
                      v-model="finalValue"
                      variant="outlined"
                      focused
                      hide-details
                      readonly
                      label="Valor corrigido (R$):"
                      color="green-darken-2"
                      base-color="green-darken-2"
                      prefix="R$"
                      class="final"
                      type="number"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                
                <v-row justify="center">
                  <v-col align="center" class="pa-0">
                    <v-card-text class="pt-0 text-green-darken-4">
                      Período (meses): {{ this.months_final }}
                    </v-card-text>
                  </v-col>
                  <v-col align="center" class="pa-0">
                    <v-card-text class="pt-0 text-green-darken-4">
                      Taxa: {{ this.indexItens[this.indexValue_final].title }} + {{ this.fee_final }}% a.m.
                    </v-card-text>
                  </v-col>
                </v-row>
                <v-card-text class="pb-0 mb-0 text-black">
                  * A correção inclui a taxa do mês inicial
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>
import { useHead } from '@vueuse/head'
import ipca_history from '../assets/ipca_history.json'

export default {
  data () {
    return {
      ipca_history: ipca_history,
      
      indexItens: [
        {title: 'IPCA (IBGE)', value: 0, props: {subtitle: 'Jul/1994 - Fev/2024'}}
      ],

      monthsList: [
        {title: 'Jan', value: 1},
        {title: 'Fev', value: 2},
        {title: 'Mar', value: 3},
        {title: 'Abr', value: 4},
        {title: 'Mai', value: 5},
        {title: 'Jun', value: 6},
        {title: 'Jul', value: 7},
        {title: 'Ago', value: 8},
        {title: 'Set', value: 9},
        {title: 'Out', value: 10},
        {title: 'Nov', value: 11},
        {title: 'Dez', value: 12}
      ],
      yearsList: [
        {title: '1994', value: 0},
        {title: '1995', value: 1},
        {title: '1996', value: 2},
        {title: '1997', value: 3},
        {title: '1998', value: 4},
        {title: '1999', value: 5},
        {title: '2000', value: 6},
        {title: '2001', value: 7},
        {title: '2002', value: 8},
        {title: '2003', value: 9},
        {title: '2004', value: 10},
        {title: '2005', value: 11},
        {title: '2006', value: 12},
        {title: '2007', value: 13},
        {title: '2008', value: 14},
        {title: '2009', value: 15},
        {title: '2010', value: 16},
        {title: '2011', value: 17},
        {title: '2012', value: 18},
        {title: '2013', value: 19},
        {title: '2014', value: 20},
        {title: '2015', value: 21},
        {title: '2016', value: 22},
        {title: '2017', value: 23},
        {title: '2018', value: 24},
        {title: '2019', value: 25},
        {title: '2020', value: 26},
        {title: '2021', value: 27},
        {title: '2022', value: 28},
        {title: '2023', value: 29},
        {title: '2024', value: 30}
      ],

      indexValue: 0,
      fee: '0',

      initialDate_Month: 7,
      initialDate_Year: 0,

      finalDate_Month: 2,
      finalDate_Year: 30,

      initialValue: '0',
      finalValue: '0',

      months_final: 0,
      indexValue_final: 0,
      fee_final: 0,
    }
  },
  mounted () {
  },
  methods: {
    calculate: function () {
      var maxYear, maxMonth, iYear, iMonth, fYear, fMonth, monthIndex, aux

      if (this.fee == null){
        this.fee = 0
      }

      this.fee_final = this.fee

      maxYear = this.ipca_history.year.length + 1993
      maxMonth = this.ipca_history.year[maxYear - 1994].month.length - 1

      iYear = this.initialDate_Year + 1994
      iMonth = this.initialDate_Month

      fYear = this.finalDate_Year + 1994
      fMonth = this.finalDate_Month

      if (iYear == 1994){
        if (iMonth < 7){
          return
        }
      }

      if (fYear == maxYear){
        if (fMonth > maxMonth){
          return
        }
      }

      this.calculateMonths(iYear, iMonth, fYear, fMonth)

      iYear -= 1994
      fYear -= 1994
      aux = this.initialValue

      // calculate first year
      for (var i = iMonth; i < 13; i++) {
        monthIndex = this.ipca_history.year[iYear].month[i].value
        aux *= (1 + (monthIndex/100) + (this.fee/100))
      }
      iYear++

      // calculate middle years
      while (iYear < fYear) {
        for (i = 1; i < 13; i++) {
          monthIndex = this.ipca_history.year[iYear].month[i].value
          aux *= (1 + (monthIndex/100) + (this.fee/100))
        }
        iYear++
      }

      // calculate last year
      for (i = 1; i <= fMonth; i++) {
        monthIndex = this.ipca_history.year[fYear].month[i].value
        aux *= (1 + (monthIndex/100) + (this.fee/100))
      }

      this.finalValue = aux.toFixed(2)

      return
    },
    calculateMonths: function (iYear, iMonth, fYear, fMonth) {
      this.months_final = 13 - iMonth
      this.months_final += (fYear - iYear - 1) * 12 
      this.months_final += fMonth
    },
  },
  setup() {
    useHead({
      title: 'Calcula pra mim! - Correção de Valores por Índices de Preço',
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