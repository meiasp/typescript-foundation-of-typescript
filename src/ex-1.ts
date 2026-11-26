function calculate(a: number, b: number, operator: string): number | string {
  let operatorValue: number | string = 0;
  switch (operator){
    case "add":
      operatorValue = a+b;
      break;
    case "multiply":
      operatorValue = a*b;
      break;
    case "divide":
      operatorValue = a/b;
      break;
    case "mod":
      operatorValue = "Invalid operator";
  } return operatorValue
}

console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 5, "mod")); // "Invalid operator"