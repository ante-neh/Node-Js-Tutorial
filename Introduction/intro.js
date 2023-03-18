// How NodeJS differs from vanilla JS
//1.Node runs on a server - not in a browser (backend not frontend)
//2.The console is the terminal window
//console.log("Hello World") the output will be displayed on terminal
//3.global object instead of window object
//console.log(global)
//4.Has common core modules that we will explore
//5.CommonJS(require) modules instead of ES6 modules(import)

// const  os = require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// const path = require('path')

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// const path = require('path')

// const {root, dir, base, ext, name} = path.parse(__filename)
// console.log(root)
// console.log(dir)
// console.log(base)
// console.log(ext)
// console.log(name)

// const math = require('./math')

// console.log(math.add(2,3))
// console.log(math.subtract(3,2))
// console.log(math.multiply(2,3))
// console.log(math.divide(4,2))

// const {add, subtract, multiply, divide} = require('./math')
// console.log(add(2,3))
// console.log(subtract(3,2))
// console.log(multiply(2,3))
// console.log(divide(4, 2))

// 6. Missing some JS APIs like fetch

