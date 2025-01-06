
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let diagonalDifferenceLeft = 0;
    let diagonalDifferenceRight = 0;

    for (let i = 0; i < arr.length; i++) {
        diagonalDifferenceLeft += arr[i][i];
        diagonalDifferenceRight += arr[i][arr.length - i - 1]
    }

    const result = Math.abs(diagonalDifferenceLeft - diagonalDifferenceRight);

    return result
}


diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]); 


// example:

// Array = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, 2]
// ]