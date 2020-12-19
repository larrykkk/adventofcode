const one = require("./one");
const two = require("./two");

describe("Part One", () => {
  it("should be pass", () => {
    let input = `BFFFBBFRRR
    FFFBBBFRRR
    BBFFBBFRLL`;
    expect(one(input)).toBe(820);
  });
});

// describe("Part Two", () => {
//   it("should be pass", () => {
//     let input = `BFFFBBFRRR
//     FFFBBBFRRR
//     BBFFBBFRLL`;
//     expect(one(input)).toBe(820);
//   });
// });
