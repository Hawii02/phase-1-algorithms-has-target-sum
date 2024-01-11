function hasTargetSum(array, target) {
  // Write your algorithm here
  // for loop to iterate through the array
for (let i = 0; i < array.length; i++){
  const j = array.length - 1 - i;
  // comparison to check if sum is equal to the target
  if (i !== j && array[i] + array[j] === target){
    // should return true if any pair of numbers in the array adds up to the target number.
    return true;
      } 

   }
   //  should return false if there isn't any pair of numbers in the array that adds up to the target number.
    return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  function (hasTargetSum), this function should return true if any pair of numbers in the array adds up to the target number.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
