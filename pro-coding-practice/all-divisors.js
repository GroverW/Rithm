function allDivisors(num) {
  let isNegative = num <= 0;
  let isNotWholeNumber = Math.round(num) !== num;

  if (isNegative || isNotWholeNumber) {
    return 'Please provide a positive, whole number.';
  }

  let divisors = [];

  for (let divisor = 1; divisor <= num; divisor++) {
    if (num % divisor === 0) divisors.push(divisor);
  }

  return divisors;
}