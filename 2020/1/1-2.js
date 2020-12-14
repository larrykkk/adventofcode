const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input1-2.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  var numbers = [];
  var obj = {};
  var matched = [];

  for await (const line of rl) {
    numbers.push(line);
  }
  //   numbers = numbers.slice(0, 4);
  console.log({ numbers });

  //   var numbers = [1010, 1009, 1];

  var twoSum = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] !== numbers[j] && numbers[i] * 1 + numbers[j] * 1 < 2020) {
        twoSum.push({
          number: numbers[i] * 1 + numbers[j] * 1,
          a: numbers[i],
          b: numbers[j],
        });
      }
    }
  }

  twoSum = [...new Set(twoSum)].sort((a, b) =>
    a.number > b.number ? 1 : b.number > a.number ? -1 : 0
  );
  console.log(twoSum);

  for (let i = 0; i < twoSum.length; i++) {
    obj[2020 - twoSum[i].number] = twoSum[i];
  }

  console.log(obj);

  numbers.forEach((x) => {
    if (obj[x] && numbers.indexOf(x) !== -1) {
      matched.push({ matched: obj[x], x });
    }
  });

  console.log(matched);

  var res = 1;

  matched.forEach(({ x }) => {
    res = res * x;
  });

  console.log(res);
}

processLineByLine();
