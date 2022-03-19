// Distinct elements solution
console.log("/************************************************/")
let set1 = [3, 1, 7, 9]
let set2 = [2, 4, 1, 9, 3]
let distinct_set = []
var summ = 0
var in_set = false
console.log("Set 1:", set1)
console.log("Set 2:", set2)
for(var i in set1){
    in_set = false
    for(var j = 0; j< set2.length ;j++){
        if(set1[i] === set2[j]){
            in_set = true
            break
        }else if(set1[i] !== set2[j]){
            in_set = false
        }
        if(j >= (set2.length -1) && in_set === false){
            distinct_set.push(set1[i])
        }
    }
}
for(var i in set2){
    in_set = false
    for(var j = 0; j< set1.length ;j++){
        if(set2[i] === set1[j]){
            in_set = true
            break
        }else if(set2[i] !== set1[j]){
            in_set = false
        }
        if(j >= (set1.length -1) && in_set === false){
            distinct_set.push(set2[i])
        }
    }
}
for(var i in distinct_set){
    summ += distinct_set[i]
}
console.log("Set distinct_set", distinct_set)
console.log("The sum of disctinct_set is : "+ summ)
console.log("/************************************************/") 
// ********************************************************************************** //
// Sum of overlapping elements
// Solution I
let set3 = [12, 13, 6, 10]
let set4 = [13, 10, 16, 15]
var sum = 0
console.log("set 3: ", set3)
console.log("set 4: ", set4)
for(var i in set3){
    for(var j in set4){
        if(set3[i] == set4[j]){
            sum += set3[i]*2
        }
    }
}
console.log("Sum of overlapping elements: " + sum)
console.log("/************************************************/")
// ********************************************************************************** //
// Solution II (hash table method (Object/ Dictionary))
var set33 = {
    1: 12,
    2: 13,
    3: 6,
    4: 10
  };
var set44 = {
    1: 13,
    2: 10,
    3: 16,
    4: 15
};
var set33_44 = {}
var summm = 0
console.log("set 33: ", set33)
console.log("set 34: ", set44)

for(var i in set33){
    for(var j in set44){
        if(set33[i] == set44[j]){
            // object[key] = value
            set33_44[i] = set33[i]
        }
    }
}
console.log("set 33_34: ", set33_44)
for(k in set33_44){
    summm += set33_44[k]*2
}
console.log("Sum of overlapping elements: "+ summm)
console.log("/************************************************/")