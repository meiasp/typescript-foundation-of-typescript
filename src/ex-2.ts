function sumEvenNumbers(numbers: number[]): number {
  //filter even number
  //reduce add even number
  const evenNum = numbers.filter((num) => num % 2 === 0);
  // console.log(evenNum) //[2,4,6]
  const evenSum = evenNum.reduce((acc,curr) => acc+curr,0)
  return evenSum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
