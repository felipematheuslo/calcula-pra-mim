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
              Valuation de Ações
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-3">
          <v-col cols="12" md="8" class="py-0">
            <v-text class="mb-2 text-wrap">
              <p class="text-justify">
              Ferramenta online para te ajudar no cálculo do preço justo, ou valuation, de uma ação negociada na bolsa de valores.
              </p>
              <p class="text-justify">
              As fórmulas empregadas nos cálculos são as de Décio Bazin, Benjamin Graham e Peter Lynch.
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
              max-width="800"
              class="mx-2 py-1"
            >
              <v-card-title class="pb-0 text-wrap">
                Preencha as informações abaixo:
              </v-card-title>

              <v-card-item>
                <v-row justify="center" class="mt-1">
                  <v-col cols="12" sm="4" align="center">
                    <v-text-field
                      focused
                      hide-details
                      label="Cotação atual (R$)"
                      type="number"
                      v-model="cotacaoAtual"
                      prefix="R$"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" align="center">
                    <v-text-field
                      focused
                      hide-details
                      label="Dividend Yield (%)"
                      type="number"
                      v-model="dividendYield"
                      suffix="%"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" align="center">
                    <v-text-field
                      focused
                      hide-details
                      label="Preço/Lucro (P/L)"
                      type="number"
                      v-model="pl"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" align="center">
                    <v-text-field
                      focused
                      hide-details
                      label="Lucro por ação (LPA)"
                      type="number"
                      v-model="lpa"
                      prefix="R$"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" align="center">
                    <v-text-field
                      focused
                      hide-details
                      label="Valor patrimonial por ação (VPA)"
                      type="number"
                      v-model="vpa"
                      prefix="R$"
                      variant="outlined"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="4" align="center">
                    <v-text-field
                      focused
                      hide-details
                      label="Crescimento projetado (%)"
                      type="number"
                      v-model="crescimentoLPA"
                      suffix="%"
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
                      Calcular
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <v-col align="center">
                    <div
                      id="lynch"
                      style="width: 600px; height:320px;"
                      class="mt-5"
                    >
                    </div>
                  </v-col>
                </v-row>

              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
  </v-container>
</template>

<script>
import * as echarts from 'echarts/core';
import { TitleComponent } from 'echarts/components';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, GaugeChart, CanvasRenderer]);

export default {
  data () {
    return {
      cotacaoAtual: '',
      dividendYield: '8.45',
      crescimentoLPA: '1',
      vpa: '',
      lpa: '',
      pl: '6.28',
      lynchResult: '0',
      myChart: '',
      option: {
        title: {
          show: true,
          textStyle: {
            color: 'black',
            fontSize: 23
          },
          text: 'Peter Lynch',
          textAlign: 'center',
          left: '50%'
        },
        series: [
          {
            type: 'gauge',
            top: '-20%',
            left: '-20%',
            right: '-20%',
            bottom: '-20%',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 4,
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            }
          },

          {
            type: 'gauge',
            top: '-20%',
            left: '-20%',
            right: '-20%',
            bottom: '-20%',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '98%',
            min: 0,
            max: 4,
            splitNumber: 400,
            axisLine: {
              lineStyle: {
                width: 24,
                color: [
                  [1 / 4, '#ff3333'],
                  [1.5 / 4, 'orange'],
                  [2.5 / 4, 'lime'],
                  [1, '#009900']
                ]
              }
            },
            axisLabel: {
              color: 'black',
              fontSize: 13,
              distance: -40,
              rotate: 'tangential',
              formatter: function (value) {
                if (value === 0.5) {
                  return 'Caro';
                } else if (value === 1.25) {
                  return 'Preço justo';
                } else if (value === 2) {
                  return 'Barato';
                } else if (value === 3.3) {
                  return 'Muito barato';
                }
                return '';
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            detail: {
              fontSize: 20,
              offsetCenter: [0, '20%'],
              formatter: function (value) {
                value = value.toFixed(2).replace('.', ',');
                return value;
              },
              color: '#000'
            },
            pointer: {
              icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
              length: '100%',
              itemStyle: {
                color: '#000'
              }
            },
            data: [
              {
                value: '2'
              }
            ]
          }
        ]
      },
    }
  },
  methods: {
    calculate () {
      this.lynchResult = parseFloat(this.dividendYield) + parseFloat(this.crescimentoLPA)
      this.lynchResult /= this.pl

      this.option.series[1].data[0].value = this.lynchResult.toFixed(2)
      this.chartInit()
    },
    chartInit () {
      var chartDom = document.getElementById('lynch');
      this.myChart = echarts.init(chartDom);
      this.myChart.setOption(this.option);
    },
  },
  mounted () {
    var chartDom = document.getElementById('lynch');
    this.myChart = echarts.init(chartDom);
    this.myChart.setOption(this.option);
  }
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