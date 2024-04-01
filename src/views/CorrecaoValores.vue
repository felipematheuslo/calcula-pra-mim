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
              Correção de Valores por Índice de Preço com Juros
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="11" class="py-0">
            <v-text class="mb-2 text-wrap">
              <p class="text-justify">
              Calculadora online para te ajudar a corrigir de forma rápida um valor baseado na variação 
              de um índice entre duas datas e aplicando uma taxa de juros adicional. Observe que a calculadora 
              trabalha somente com a moeda corrente, o Real (Julho de 1994 até o momento).
              </p>
              <br/>
              <p class="text-justify">
              Esta calculadora assume juros mensal, compondo a correção do valor mês a mês.
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
              elevation="10"
              max-width="500"
              class="mx-2 py-1"
            >
              <v-card-item>
                <v-row justify="center" class="mt-0">
                  <v-col cols="12" align="left">
                    <v-select
                      v-model="indexValue"
                      :hint="indexItens[indexValue].range"
                      persistent-hint
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
                      label="Juros"
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
                    <p v-if="errorDateBefore" class="text-red mt-1">
                      Erro: Data inicial anterior a Julho de 1994
                    </p>
                    <p v-if="errorDateAfter" class="text-red mt-1">
                      Erro: Índice não disponível para a data final
                    </p>
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
                      {{ this.indexItens[this.indexValue_final].title }} + {{ this.fee_final }}% a.m.
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

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="11" class="py-0">
            <v-text class="mb-2 text-wrap">
              <br/>
              <p class="text-center text-h6">
              <b>Instruções de Uso:</b>
              </p>
              <br/>
              <p>
              <b>Selecione o índice</b>: Selecione o índice a ser considerado para a correção.
              </p>
              <p>
              <b>Digite a taxa de juros (em porcentagem)</b>: Insira a taxa de juros que você. 
              Por exemplo, se a taxa for de 1,00%, insira "1". Caso não se aplique juros, digite "0".
              </p>
              <p>
              <b>Selecione a data inicial</b>: Selecione o mês/ano a partir do qual você deseja corrigir
              o valor. O mês escolhido é incluído na correção. Caso não queira que ele seja incluído, 
              selecione o mês seguinte.
              </p>
              <p>
              <b>Selecione a data final</b>: Selecione o mês/ano até o qual você deseja corrigir
              o valor. O mês escolhido é incluído na correção. Caso não queira que ele seja incluído, 
              selecione o mês anterior.
              </p>
              <p>
              <b>Digite o valor a ser corrigido</b>: Insira o valor em reais que deseja corrigir. 
              Por exemplo, se o valor for R$900,00 insira "900".
              </p>
              <p>
              <b>Clique em "Corrigir Valor"</b>: Depois de inserir as informações anteriores, clique no botão 
              "Corrigir Valor" para obter o valor atualizado.
              </p>
              <p>
              <b>Resultado</b>: O resultado será exibido imediatamente abaixo do botão de cálculo, seguido de 
              informações adicionais sobre o cálculo.
              </p>
            </v-text>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>
import ipca_history from '../assets/ipca_history.json'

export default {
  data () {
    return {
      ipca_history: ipca_history,
      
      indexItens: [
        {title: 'IPCA', value: 0, props: {subtitle: '(IBGE)'}, range: 'Jul/1994 - Fev/2024'}
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
        1994, 1995, 1996, 1997, 1998, 1999, 2000,
        2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
        2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
        2021, 2022, 2023, 2024
      ],

      indexValue: 0,
      fee: '0.00',

      initialDate_Month: 7,
      initialDate_Year: 1994,

      errorDateBefore: false,
      errorDateAfter: false,

      finalDate_Month: 2,
      finalDate_Year: '2024',

      initialValue: '1000.00',
      finalValue: '0.00',

      months_final: 0,
      indexValue_final: 0,
      fee_final: 0,
    }
  },
  mounted () {
  },
  methods: {
    calculate: function () {
      var index, maxYear, maxMonth, iYear, iMonth, fYear, fMonth, monthIndex, aux

      switch (this.indexValue){
        case 0:
          index = this.ipca_history
          break;
      }

      if (this.fee == null){
        this.fee = 0
      }

      this.fee_final = this.fee
      this.finalValue = '0.00'

      maxYear = index.year.length - 1
      maxMonth = index.year[maxYear].month.length - 1

      iYear = this.initialDate_Year
      iMonth = this.initialDate_Month
      fYear = this.finalDate_Year
      fMonth = this.finalDate_Month

      if (iYear == 1994){
        if (iMonth < 7){
          this.errorDateBefore = true
          return
        }
      }
      this.errorDateBefore = false

      if (fYear == maxYear){
        if (fMonth > maxMonth){
          this.errorDateAfter = true
          return
        }
      }
      this.errorDateAfter = false

      this.calculateMonths(iYear, iMonth, fYear, fMonth)

      aux = this.initialValue

      // calculate first year
      for (var i = iMonth; i < 13; i++) {
        monthIndex = index.year[iYear].month[i].value
        aux *= (1 + (monthIndex/100) + (this.fee/100))
      }
      iYear++

      // calculate middle years
      while (iYear < fYear) {
        for (i = 1; i < 13; i++) {
          monthIndex = index.year[iYear].month[i].value
          aux *= (1 + (monthIndex/100) + (this.fee/100))
        }
        iYear++
      }

      // calculate last year
      for (i = 1; i <= fMonth; i++) {
        monthIndex = index.year[fYear].month[i].value
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