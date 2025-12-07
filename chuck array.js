function min(a, b){
    return a>b?b:a;
}

function chunk(array, size) {

    const initial_array = array
    let result_array = []
    let i = 0;
    const max = initial_array.length
    while(i < max){
        result_array.push(initial_array.slice(i, min(i+size, max)))
        i += size
    }
    console.log(result_array)
    return result_array
}

chunk([1, 2, 3, 4, 5], 2)
chunk(["a", "b", "c", "d"], 3)