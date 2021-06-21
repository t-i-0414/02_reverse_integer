//leetcode.com/problems/reverse-integer/

https: const reverse = (x: number): number => {
  const isNegative = Math.sign(x) === -1;

  const raw = isNegative ? -x : x;

  const arr = `${raw}`.split("").reverse();

  while (arr.length > 1 && arr[0] === "0") {
    arr.shift();
  }

  const result = isNegative ? -Number(arr.join("")) : Number(arr.join(""));

  if (Math.abs(result) >= 2 ** 31) {
    return 0;
  }

  return result;
};

export default reverse;
