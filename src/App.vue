<template>
  <v-layout>
    <v-app-bar color="indigo-darken-3">
      <v-app-bar-title class="flex text-center">
        Conversor de taxas de juros
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-row justify="center" class="mt-3">
        <v-col align="center">
          <v-card
            color="indigo-darken-1"
            variant="outlined"
            max-width="1000"
            class="mx-2 py-1"
          >
            <v-card-title class="mb-2 text-wrap">
              <p> Conversor de taxas de juros </p>
              <p> Anual ↔ Mensal </p>
            </v-card-title>

            <v-card-subtitle class="mb-2 text-wrap">
              Escolha qual conversão deseja realizar
            </v-card-subtitle>

            <v-card-item>
              <v-radio-group inline v-model="radios">
                <v-radio label="Anual → Mensal" value="true"></v-radio>
                <v-radio label="Mensal → Anual" value="false"></v-radio>
              </v-radio-group>

              <v-row justify="center">
                <v-col cols="11" sm="6" align="center">
                  <v-text-field
                    hide-details
                    label="Valor da taxa de juros (%)"
                    type="number"
                    v-model="fee"
                    :suffix="radios == 'true' ? '% a.a.' : '% a.m.'"
                    variant="outlined"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col align="center">
                  <v-btn icon="mdi-calculator" @click="calculate">
                  </v-btn>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col cols="11" sm="6" align="center">
                  <v-text-field
                    color="blue"
                    focused
                    readonly
                    v-model="feeCalculated"
                    :suffix="radios == 'true' ? '% a.m.' : '% a.a.'"
                    variant="outlined"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <v-bottom-navigation :elevation="0" mode="shift">
        2024, Felipe Laurindo
      </v-bottom-navigation>
    </v-main>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    fee: "",
    feeCalculated: "0",
    radios: "true",
  }),
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
};
</script>

<style>
.v-selection-control-group {
  justify-content: center;
}
</style>