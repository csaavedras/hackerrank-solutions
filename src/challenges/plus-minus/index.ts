/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    /* 
    todo: 
    - [x] total length of arr
    - [x] total positives number from arr 
    - [x] total negatives number from arr
    - [x] total zero numbers from arr 
    - [x] calculate ratios of each elemtns (positives, negatives and zero)
    */
    
    const totalSizeArr = arr.length
    let totalPositive = arr.filter(num => num > 0).length;
    let totalNegatives = arr.filter(num => num < 0).length;
    let totalZeros = arr.filter(num => num === 0).length

    let positiveRatio =  (totalPositive / totalSizeArr).toFixed(6)
    let negativeRatio = (totalNegatives / totalSizeArr).toFixed(6)
    let zeroRatio = (totalZeros / totalSizeArr).toFixed(6)

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

plusMinus([-4,3,-9,0,4,1])
