const one = require("./one");

describe("Part One", () => {
  it("should be pass", () => {
    let input = `BFFFBBFRRR
    FFFBBBFRRR
    BBFFBBFRLL`;
    expect(one(input)).toBe(820);
  });
});
