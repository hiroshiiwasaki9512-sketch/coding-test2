function extract(input){
    if (input == null) return null;

    if(typeof(input)!=='object'){
        
    } else {
        if (Array.isArray(input)){
            for (i of input){
                extract(i)
            }
        }
    }
}

function deepFlatten(value) {
    let result = []
    function extract(input){
        if (input == null) result.push(null);
        console.log(typeof(input)=="object")
        if(typeof(input)!=='object'){
            console.log(input)
            result.push(input)
        } else {
            if (Array.isArray(input)){
                for (i of input){
                    extract(i)
                }
            }else{
                for(i in Object.values(object)){
                    extract(i)
                }
            }
            
        }
    }
    console.log(result)
    return result
}

deepFlatten({
  a: [1, 2],
  b: { c: [3, 4], d: 5 },
  e: [[6], [7, [8]]]
})