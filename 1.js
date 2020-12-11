const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const obj = {};
  const lines = [];
  const nums = [];
  const fileStream = fs.createReadStream('input1.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    // console.log(`Line from file: ${line}`);
    obj[2020 - line] = line;
    lines.push(line);
  }

  lines.forEach((x) => {
    if (obj[x]) {
      nums.push(obj[x]);
    }
  });

  console.log(nums[0] * nums[1]);
}

processLineByLine();
