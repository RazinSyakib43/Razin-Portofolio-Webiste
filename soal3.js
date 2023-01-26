function test(n, lastResult) {
    let i = n;
    let r = "";
    let isFound = "";
    while (i >= 0){
        let j = i;
        isFound = "0";
        while (j >= 0){
            if((i+j) % (n*n) == 0){
                isFound = "1";
                break;
            }
        j--;
        }
        r += isFound;
        i--;
    }
    lastResult += r;
    n--;

    if(n > 0){
        return test(n, lastResult);
    }else{
        return lastResult;
    }
}

let result = test(2, "1");
console.log(result);