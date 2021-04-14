// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
// let test = [
//   [4],
//   [-1, 1, -7, -8],
//   [-10, -8, -5, -2],
//   [0, 9, 7, -1],
//   [4, 4, -2, 1]
// ];

// HackerRank Matrix
let test2 = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];

//Access the array
//Get the values from left to right
//Get the values from right to left diagonally
//Add the values for left sum and for right sum

/*
Left Side
arr[0][0]
arr[1][1]
arr[2][2]
leftsum = 15

Right Side
arr[0][2]
arr[1][1]
arr[2][0]
rightsum = 17
*/

//Created function that calculates the diagonal sum
function diagonalSum(array, direction, i, j) {
  //Set base case to array.length to indicate the end of the array
  if (i == array.length) {
    return 0;
  }
  //Set the current value before manipulation
  let current = array[i][j];
  //Conditional for diagonal direction
  if (direction == "right") {
    //Recursive statement
    return diagonalSum(array, direction, ++i, ++j) + current;
  } else {
    return diagonalSum(array, direction, ++i, --j) + current;
  }
}

//Function that finds the diagonal difference
function diagonalDiff(arr) {
  //Get some of both diagonals
  let leftSum = diagonalSum(arr, "right", 0, 0);
  let rightSum = diagonalSum(arr, "left", 0, arr.length - 1);
  //Subtract total of sums
  let result = Math.abs(leftSum - rightSum);
  return result;
}

console.log(diagonalDiff(arr));
