// ================= 1
let obj = { 
    price1: 100, 
    price2: 150, 
    price3: 200, 
    price4: 100,
    price5: 150, 
}

let sum = 0;

for (let key in obj){
    sum += obj[key]
}

console.log(sum)


// ================= 2
let array = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name: 'watermelon'}, 
    {id: 3, name: 'qiwi'}, 
    {id: 4, name: 'lemon'} 
]

let new_array = []

for (let i = 0; i < array.length; i++){
    new_array.push([array[i]["id"], array[i]["name"]])
}
console.log(new_array)


// ================= 3
let marks = { math: 4, physics: 5, chemistry: 2, history: 3, english: 5 };

let result = 0;

for (let key in marks){
    if (marks[key] > 3){
        result += 1
    }
}
console.log(result)


// ================= 4
function сheckObj(obj){
    for (let key in obj){
        if (key == 'particle'){
            return true
        }
    }
    return false
}

console.log(сheckObj({id: 2, name: "tag"}))


// ================= 5
let array2 = [[1], {id: 40}, [100], [300], {part: 10}]
let new_array2 = []

function generateArray(array){
    for (let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
            new_array2.push(array[i])
        }
        else{
            for (let key in array[i]){
                new_array2.push([array[i][key]])
            }
            
        }
    }
    return new_array2
}

console.log(generateArray(array2))