let str = "Guests:\n * John \n* Pete\n * Mary"

let str2 = "HELLO WORLD"
console.log(str2.toLowerCase())

// alert("Maga")

// indexOf() - Поиск позиции подстроки
let str5 = "Maga hello world"

console.log(str5.indexOf("hello"))

// include, startWith, endsWith - Наличие подстраховки




let str9 = "Widget hello id"
console.log(str9.startsWith("Wid"))
console.log(str9.endsWith("id"))

// slice() - копирует элементы
let str13 = "Hello world"
console.log(str13.slice(3, 9))

let name = "Maga"       
let age = 25
console.log("hello".concat(" ", name, " ", age))

// split() - разбивает на части
let str14 = "Hello world maga"
console.log(str14.split(" "))

// repeat() - повторять строку

let str15 = "Hello World Maga"
console.log(str15.repeat(5))


// trim(), trimEnd(), trimStart() - удалить пробелы в строке
let str17 = "             Hello World      "
console.log(str17.trimStart())