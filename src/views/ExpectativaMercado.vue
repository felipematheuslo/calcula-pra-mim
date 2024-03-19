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
        <v-app-bar-title class="webPageName flex text-center ml-0 mr-14">
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
              Projeções dos principais índices do mercado brasileiro para os próximos anos:
            </v-text>
          </v-col>
        </v-row>

        <v-row justify="center" class="mt-3 mb-5">
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
                Atualizado em: 15/03/2024
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-5">
          <v-col cols="12" md="10" align="center" class="py-0">
            <v-text class="text-wrap text-indigo">
              <p class="text-h5">
              O que é o relatório Focus?
              </p>

              <br/>
            
              <p class="text-justify">
                O Relatório Focus é um boletim semanal divulgado pelo Banco Central do Brasil que apresenta projeções econômicas de diversos indicadores, como inflação, taxa de juros, crescimento do Produto Interno Bruto (PIB) e taxa de câmbio. Essas projeções são feitas por instituições financeiras e consultorias econômicas que participam da pesquisa. O objetivo do Relatório Focus é fornecer informações relevantes para auxiliar na análise e no acompanhamento da economia brasileira, sendo uma ferramenta importante para investidores, empresas e formuladores de políticas públicas.
              </p>

              <br/><br/>

              <p class="text-h5">
              Onde usar essas projeções?
              </p>

              <br/>

              <p class="text-justify">
              <b>Tomada de Decisões de Investimento:</b> Investidores podem utilizar as projeções para entender as perspectivas econômicas do país e ajustar suas estratégias de investimento de acordo com as expectativas de crescimento, inflação, taxa de juros e câmbio.
              </p>
              <br/>
              <p class="text-justify">
              <b>Planejamento Financeiro Empresarial:</b> Empresas podem utilizar as projeções para fazer previsões sobre a demanda por seus produtos e serviços, ajustar suas estratégias de produção e vendas, além de planejar investimentos e expansões de acordo com as condições econômicas esperadas.
              </p>
              <br/>
              <p class="text-justify">
              <b>Políticas Monetárias e Fiscais:</b> O Banco Central do Brasil pode utilizar as projeções do Relatório Focus como um indicador para ajustar suas políticas monetárias, como a definição da taxa básica de juros (Selic), com o objetivo de atingir metas de inflação e promover o crescimento econômico sustentável.
              </p>
              <br/>
              <p class="text-justify">
              <b>Planejamento Governamental:</b> Os órgãos governamentais podem utilizar as projeções para elaborar políticas públicas e orçamentos, considerando as expectativas de crescimento econômico, inflação e arrecadação de impostos.
              </p>
              <br/>
              <p class="text-justify">
              <b>Avaliação de Riscos e Oportunidades:</b> As projeções do Relatório Focus também podem ser utilizadas para avaliar os riscos e oportunidades associados a diferentes cenários econômicos, ajudando indivíduos, empresas e instituições financeiras a tomar decisões mais informadas e estratégicas.
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
          ano0: '4.95',
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
          ano0: '3.79',
          ano1: '3.52',
          ano2: '3.50',
          ano3: '3.50',
        },
        {
          indice: 'IGP-M (variação%)',
          ano0: '2.55',
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