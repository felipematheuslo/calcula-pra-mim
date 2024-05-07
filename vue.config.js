const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // chunks to include on this page, by default includes extracted common chunks and vendor chunks
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // when using the entry-only string format, template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found. Output filename is inferred to be `subpage.html`.
    conversordejuros: 'src/pages/conversorjuros.js',
    correcaodevalores: 'src/pages/correcaovalores.js',
    mercado: 'src/pages/mercado.js',
    valuation: 'src/pages/valuation.js'
  }
})