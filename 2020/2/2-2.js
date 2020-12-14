const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  var total = 0;
  const fileStream = fs.createReadStream('input2-1.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    // console.log(`${line}`);

    var [freq, word, strings] = line.replace(':', '').split(' ');

    var [first, second] = freq.split('-');

    strings = Array.from(strings);

    // const times = strings.filter((x) => {
    //   return x === word;
    // }).length;

    console.log({ first, second, word, strings });

    if (
      strings[first - 1] !== strings[second - 1] &&
      (strings[first - 1] === word || strings[second - 1] === word)
    ) {
      total++;
    }
  }

  console.log(total);
}

processLineByLine();
