const strLengthFrequency = (strs) => {
  // Object lưu trữ số lần xuất hiện của từng độ dài chuỗi
  const lengthCounts = {};
  // Tần suất xuất hiện nhiều nhất của một độ dài chuỗi
  let maxCount = 0;

  for (const str of strs) {
    const length = str.length;
    // Toán tử Nullish Coalescing
    lengthCounts[length] = (lengthCounts[length] || 0) + 1;
    maxCount = Math.max(maxCount, lengthCounts[length]);
  }

  // Lấy tất cả độ dài chuỗi có tần suất lớn nhất
  const mostFrequentLengths = Object.keys(lengthCounts)
    .filter((length) => lengthCounts[length] === maxCount)
    .map(Number);

  return strs.filter((str) => mostFrequentLengths.includes(str.length));
};

// Test case 1:
const strs1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
const result1 = strLengthFrequency(strs1);
console.log(result1); // Output: ['ab', 'cd', 'gh']

// Test case 2:
const strs2 = ['aaa', 'abc', 'f', 'gi', 'jqka', 'ipwnm', 'rtyb'];
const result2 = strLengthFrequency(strs2);
console.log(result2);

// Test case 3:
const strs3 = ['aaa', 'abc', 'f', 'gi', 'you', 'jqka', 'ipwnm', 'rtyb', 'h'];
const result3 = strLengthFrequency(strs3);
console.log(result3);
