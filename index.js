const lodash = require('lodash')

let arr=[{a:1,b:2},{a:11,b:22}]
console.log(lodash.findIndex(arr,{a:1,b:22}))