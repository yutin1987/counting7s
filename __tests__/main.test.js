const g = require('../main');

describe('matching cities to foods', () => {
  it('quiz', () => {
    expect(g(7)).toBe(1);
    expect(g(20)).toBe(2);
    expect(g(70)).toBe(8);
    expect(g(100)).toBe(19);
  });

  it('g(1000)', () => {
    expect(g(1000)).toBe(271);
  });

  it('random', () => {
    const target = Math.round(Math.random() * 100000);

    let start = Date.now();
    const result = g(target);
    const resultUsedTimes = Date.now() - start;

    let total = 0;
    for (let i = 0; i <= target; i++) {
      if (String(i).split('').includes('7') === true) total += 1;
    }
    const totalUsedTimes = Date.now() - start;

    expect(result).toBe(total);
    expect(totalUsedTimes > resultUsedTimes).toBe(true);
  });
});