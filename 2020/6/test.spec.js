const one = require("./one");
const two = require("./two");

describe("Part One", () => {
  it("should be pass", () => {
    var input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    expect(one(input)).toBe(11);
  });
});

describe("Part One", () => {
  it("should be pass", () => {
    var input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    expect(two(input)).toBe(6);
  });
});
