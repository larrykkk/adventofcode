const fs = require('fs');
const readline = require('readline');

async function processLineByLine(right, down) {
  // console.log({ right, down });
  // return;
  const fileStream = fs.createReadStream('input3.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  var arr = [];
  var total = 0;

  for await (const line of rl) {
    console.log(`${line}`);
    arr.push(Array.from(line));
  }

  var length = arr[0].length;
  //   console.log(length);

  for (
    let rowIndex = 1, colIndex = 0;
    rowIndex < arr.length;
    rowIndex += down
  ) {
    if (colIndex + right - length >= 0) {
      colIndex = colIndex + right - length;
    } else {
      colIndex += right;
    }
    if (arr[rowIndex][colIndex] === '#') {
      total++;
    }
  }

  console.log({ total, right, down });
  return total;
}

// processLineByLine();

// processLineByLine(1, 1);

// console.log(processLineByLine(1, 1));

// const a = processLineByLine(3, 1);

// console.log(a);

// processLineByLine(1, 1);
processLineByLine(3, 1);
// processLineByLine(5, 1);
// processLineByLine(7, 1);
// processLineByLine(1, 2);

