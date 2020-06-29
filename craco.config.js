const CracoLessPlugin = require('craco-less')
const fs = require('fs')
const path = require('path')
const lessToJS = require('less-vars-to-js')

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/globalVars.less'), 'utf8')
)


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
