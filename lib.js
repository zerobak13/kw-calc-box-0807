function avg(numbers){
    let s=0;
    for(let i=0; i<numbers.length;i++){
        s+=numbers[i];

    }
    return s /numbers.length;

}



function prime(num) {
    if (num <= 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    
    return true;
}

function fact(num) {
    if (num === 0) {
        return 1; // 0! is defined as 1
    }
    
    if (num < 0) {
        return "Undefined"; // Factorial for negative numbers is undefined
    }
    
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    
    return result;
}

module.exports={
    avg,
    prime,
    fact
}
