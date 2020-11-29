
function countOfDigits(target) {
  let count = 0;

  const countOfDigits = [];
  for (let i = target.length - 2; i >= 0; i -= 1) {
    count += count * 8;
    count += Math.pow(10, target.length - i - 2);
    countOfDigits[i] = count;
  }
  return countOfDigits;
}

/**
 * @param {number} value 
 */
module.exports = function g(value) {
  const target = String(value).split('');

  const digits = countOfDigits(target);

  let total = 0;
  for (let i = 0; i < target.length; i += 1) {
    const current = Number(target[i]);
    total += current * (digits[i] || 0);
    if (current === 7) {
      total += (value % Math.pow(10, i) || 1);
      return total;
    }
    if (current > 7) {
      total -= (digits[i] || 0);
      total += Math.pow(10, i);
    }
  }

  return total;
}