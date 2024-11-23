// Sum Of Top Two Integer
const sumOfTopTwoInteger = (arr) => {
  // Tìm giá trị lớn nhất
  const max = Math.max(...arr);
  // Loại bỏ tất cả các giá trị lớn nhất (chỉ giữ lại một bản)
  arr = arr.filter((num) => num !== max);
  // Tìm giá trị lớn nhất thứ hai
  const sub_max = Math.max(...arr);
  return max + sub_max;
};

const array1 = [1, 4, 2, 3, 5];
console.log(sumOfTopTwoInteger(array1));

const array2 = [1, 4, 2, 5, 3, 5];
console.log(sumOfTopTwoInteger(array2));

const array3 = [12, 7, 2, 3, 5, 1, 6, 4, 12, 7, 7, 12];
console.log(sumOfTopTwoInteger(array3));
