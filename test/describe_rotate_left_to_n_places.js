const chai = require("chai");
const expect = chai.expect;

describe("rotate a list to n places in the left", () => {
  context("if list is not provided", () => {
    it("should return nothing", () => {
      let result = rotateToLeft();
      expect(result).to.be.eql(null);
    });
  });

  context("if n is not provided", () => {
    it("should return the same list", () => {
      let result = rotateToLeft([1, 2, 3]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });

  context("if n is greater than length of the list", () => {
    it("should throw error ex. n can't be greater than length of the list", () => {
      expect(() => {
        rotateToLeft([1, 2, 3], 5);
      }).to.throw(Error, "n must be lesser than length of the list");
    });
  });

  context("if n is lesser than length of the list", () => {
    it("should return rotated list", () => {
      let result = rotateToLeft([1, 2, 3, 4, 5, 6, 7, 8], 4);
      expect(result).to.be.eql([5, 6, 7, 8, 1, 2, 3, 4]);
    });
  });
});

const rotateToLeft = (list, n) => {
  if (list === undefined || list === null) return null;
  if (n === undefined || n === null) return list;
  if (n > list.length)
    throw new Error("n must be lesser than length of the list");
  let result = [];
  for (let i = n; i < list.length; i++) {
    result.push(list[i]);
  }
  for (let i = 0; i < n; i++) {
    result.push(list[i]);
  }
  return result;
};
