// Since --formats is not working for `vue build` anymore, we should remove unused outputs
// to reduce overall package size.

rimraf = require('rimraf')

rimraf.sync('dist/demo.html')
rimraf.sync('dist/laraberg-vue.common.js.map')
rimraf.sync('dist/laraberg-vue.umd.*')
console.log("Preserved common.js output only.\n")
