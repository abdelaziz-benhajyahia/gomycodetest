// procedure method

let vectors = [[7, 1, 1],[6, 0, 2], [5, 7, 0], [3, 1, 2], [2, 3 ,8], [0, 0, 0]]
console.log("/**********************************************************/")

// in JS we can consider a function without return a procedure  
function dot_product(v1, v2){
    var product = 0
    for(var i = 0; i < v1.length; i++){
        product += v1[i] * v2[i]
        if(product === 0){
            console.log(`${v1[i]} and ${v2[i]} are orthogonal `)
        }
        product = 0
    }
}

for(var j = 0; j < (vectors.length -1); j++){
    dot_product(vectors[j], vectors[j+1])
}
console.log("/**********************************************************/")

// function method

function fun_dot_product(v1, v2){
    var product = 0
    product += v1 * v2
    if(product === 0){
        return console.log(`${v1} and ${v2} are orthogonal `)
    }
}

for(var j = 0; j < (vectors.length -1); j++){
    for(var i = 0; i < vectors[j].length; i++){
        fun_dot_product(vectors[j][i], vectors[j+1][i])
    }
}
console.log("/**********************************************************/")