//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//Example
// arr = [1,3,5,7,9]

//The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is  3 + 5 + 7 + 9 = 24. The function prints
//16 24

function miniMaxSum(arr) {
    const min = Math.min.apply(null, arr);
    const max = Math.max.apply(null, arr);
    const sum = (value) => arr.filter(i=> i !== value).reduce((a,b)=> a + b);
    console.log(sum(max), sum(min));
}

function main() {
    const arr = [7, 69, 2, 221, 8974];
    miniMaxSum(arr);
}

main();