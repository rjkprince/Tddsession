const chai = require("chai");
const expect = chai.expect;

describe("drop every nth item in a list", () => {
  context("if list is not provided", () => {
    it("should return nothing", () => {
      let result = dropEveryNth();
      expect(result).to.be.eql(null);
    });
  });
  context("if n is not provided", () => {
    it("should return the same list", () => {
      let result = dropEveryNth([1, 2, 3]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });
  context("if n is greater than length of the list", () => {
    it("should throw error ex. n can't be greater than length of the list", () => {
      expect(() => {
        dropEveryNth([1, 2, 3], 5);
      }).to.throw(Error, "n must be lesser than length of the list");
    });
  });

  context("if n is lesser than length of the list", () => {
    it("should return list after removing every nth item", () => {
      let result = dropEveryNth([1, 2, 3, 4, 5, 6, 7, 8], 3);
      expect(result).to.be.eql([1, 2, 4, 5, 7, 8]);
    });
  });
});

const dropEveryNth = (list, n) => {
  if (list === undefined || list === null) return null;
  if (n === undefined || n === null) return list;
  if (n > list.length)
    throw new Error("n must be lesser than length of the list");
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if ((i + 1) % n == 0) continue;
    result.push(list[i]);
  }
  return result;
};
