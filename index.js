/* 1. find the most frequently occurring number  */
const findHighestFreq = (arr) => {
  const map = new Map();
  let max = 0;

  for (const item of arr) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
    max = Math.max(map.get(item), max);
  }

  return max;
};
/* test */
const arr1 = [...'317111'];
console.log('findHighestFreq: ', findHighestFreq(arr1)); // 4: has 4 of 1

/*
  2. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
*/
const getDiffBetweenDigonal = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  if (m === 0 || n === 0 || m !== n) {
    return undefined;
  }
  let firstDigonal = 0;
  let secondDigonal = 0;
  let res;
  for (let i = 0; i < m; i++) {
    firstDigonal += matrix[i][i];
    secondDigonal += matrix[i][m - i - 1];
  }
  res = Math.abs(firstDigonal - secondDigonal);
  return res;
};
// /* test */
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
console.log('getDiffBetweenDigonal: ', getDiffBetweenDigonal(matrix));

/* 3. Count the number of 3 as digit in all numbers from 0 to 50. */
const find3 = (start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    const numberString = i.toString();
    for (const char of numberString) {
      if (char === '3') {
        count++;
      }
    }
  }
  return count;
};
/* test */
console.log('find3: ', find3(0, 50)); // 15

/* 4. give a string “cvs health”, change it to “Cvs Health” */
const capitalFirstLetter = (str) => {
  let res = str.charAt(0).toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i - 1) === ' ') {
      res += str.charAt(i).toUpperCase();
    } else {
      res += str.charAt(i);
    }
  }
  return res;
};
/* test */
const str2 = 'cvs health';
console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

/*
  5. give a str: wave
  Output: ["Wave", "wAve", "waVe", "wavE"]
*/
const capEachCharInStr = (str) => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    let tem = '';
    for (let j = 0; j < str.length; j++) {
      if (i === j) {
        tem += str[j].toUpperCase();
      } else {
        tem += str[j];
      }
    }
    res.push(tem);
  }
  return res;
};
/* test */
const str3 = 'wave';
console.log('capEachCharInStr: ', capEachCharInStr(str3));

/*
  6. give a string, only have (){}[], create a function check if the string is valid
*/
const isValid = (str) => {
  const map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0 || map.get(stack[stack.length - 1]) !== str[i]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false;
};
/* test */
console.log('isValid: ', isValid('()[{}{}]')); // true

/* 7. Fibonacci */
const fibonacci = (num) => {
  if (num <= 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  while (num > 0) {
    let tem = a + b;
    a = b;
    b = tem;
    num--;
  }
  return b;
  // for loop
};
// const fibonacci = (num) => {
//   // recursion
// }
/* test */
console.log('fibonacci: ', fibonacci(4));

/* 8. looking for most close 3 numbers to the target */
const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
function findCloseNums(givenNum, givenArr, find) {
  if (givenArr.length === 0) {
    return [];
  }
  if (find >= givenArr.length) {
    return givenArr;
  }
  givenArr.sort((a, b) => a - b);
  const newArray = givenArr.map((item) => {
    return {
      value: item,
      diff: Math.abs(item - givenNum),
    };
  });
  newArray.sort((a, b) => a.diff - b.diff);
  return newArray.slice(0, find).map(item=>item.value);
}

console.log('findCloseNums: ', findCloseNums(30, givenArr, 3)); //[32, 27, 25];

/* 9. given the out string length, and how many char you have to use, create a function to generate the random string */
/*
  @param [number, number] N, K
  @return [string]
*/
function createRandomStr(N, K) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charSet = '';

  if (K > characters.length) {
    K = characters.length;
  }

  while (charSet.length < K) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const char = characters[randomIndex];
    if (!charSet.includes(char)) {
      charSet += char;
    }
  }

  let result = '';
  for (let i = 0; i < N; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    result += charSet[randomIndex];
  }
  return result;
}
console.log('createRandomStr: ', createRandomStr(8, 3)); // acbaabca

/* 10. sort the array by the given sequence */
function sortBySeq(arr, sqs) {
  const map = new Map();
  for (let i = 0; i < sqs.length; i++) {
    map.set(sqs[i], i);
  }
  return arr.sort((a, b) => {
    return map.get(a) - map.get(b);
  });
}
const sqs = 'qwertyuiopasdfghjklzxcvbnm';
console.log('sortBySeq: ', sortBySeq([...'hello'], sqs)); // ["e", "o", "h", "l", "l"];
