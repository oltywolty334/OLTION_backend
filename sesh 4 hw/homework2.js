function avgArray(array2){
    let totalArray = 0;
    for(let i = 0; i < array2.length; i++){
        totalArray += array2[i];
    }
    let avg = totalArray / array2.length;
    console.log(avg);
    return avg;
}

avgArray([3,7]);
