function insertion_sort(arr){
    var i, j, current

    for(var i = 0; i < (arr.length-1); i++){
        current = arr[i]
        j = i-1
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = current;
    }
}