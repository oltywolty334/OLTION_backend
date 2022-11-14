function sumArray(array){
    let sum = 0;

    for(let i = 0; i < array.length; i+=1){
        sum += array[i];
    }

    console.log(sum);
    return sum;
}

sumArray([2,2,2,2,2,2,3]);