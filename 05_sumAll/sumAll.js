const sumAll = function(num1,num2) {
    if(num1 < 0 || num2 < 0 ) return 'ERROR';
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR'

    let start = Math.min(num1, num2);
    let stop = Math.max(num1, num2); 
    let sum = 0;

    while(start <= stop) {
        sum+= start;
        start++
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
