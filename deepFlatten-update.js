let result = []

function extract(input){
    if (input == null) result.push(null);

    if(typeof(input)!=='object'){
        result.push(input)
    } else {
        if (Array.isArray(input)){
            for (i of input){
                extract(i)
            }
        }else(
            extract(Object.values(input))
        )
    }
}

function deepFlatten(value) {
    extract(Object.values(value))
    console.log(result)
    return result
}

deepFlatten({
  a: [1, 2],
  b: { c: [3, 4], d: 5 },
  e: [[6], [7, [8]]]
})