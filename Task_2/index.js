const sumOfTopTwoInteger = (arr) => {
  if (arr.length < 2) {
    throw new Error('Array must have at least two elements');
  }
  // Sử dụng Set trong ES6 để lưu trữ tập hợp các giá trị duy nhất
  const uniqueArray = Array.from(new Set(arr));
  uniqueArray.sort((a, b) => b - a);

  if (uniqueArray.length < 2) {
    throw new Error('Array must have at least two unique elements');
  }
  return uniqueArray[0] + uniqueArray[1];
};

const array1 = [1, 4, 2, 3, 5];
console.log(sumOfTopTwoInteger(array1)); // Output: 9

const array2 = [1, 4, 2, 5, 3, 5];
console.log(sumOfTopTwoInteger(array2)); // Output: 9

const array3 = [12, 7, 2, 3, 5, 1, 6, 4, 12, 7, 7, 12];
console.log(sumOfTopTwoInteger(array3)); // Output: 19
