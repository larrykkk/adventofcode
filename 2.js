const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
//   const obj = {};
//   const lines = [];
//   const nums = [];
  var total = 0;
  const fileStream = fs.createReadStream('input2-1.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    console.log(`${line}`);

    var [freq, word, strings] = line.replace(':', '').split(' ');

    var [min, max] = freq.split('-');

    strings = Array.from(strings);

    const times = strings.filter((x) => {
      return x === word;
    }).length;

    console.log({ times, min, max, word, strings });

    if (times >= min && times <= max) {
      total++;
    }
  }

  console.log(total);
}

processLineByLine();
