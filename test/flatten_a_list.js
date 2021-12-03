const chai = require("chai");
const expect = chai.expect;

describe("flatten a list", () => {
  context("if list is not provided", () => {
    it("should return nothing", () => {
      let result = flattenList();
      expect(result).to.be.eql(null);
    });
  });
  context("if list is empty", () => {
    it("should return empty list", () => {
      let result = flattenList([]);
      expect(result).to.be.eql([]);
    });
  });
  context("if list is flat ex. [1,2,3]", () => {
    it("should return [1,2,3]", () => {
      let result = flattenList([1, 2, 3]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });
  context("if list is nested one level deep ex. [1,[2,3]]", () => {
    it("should return [1,2,3]", () => {
      let result = flattenList([1, [2, 3]]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });

  context("if list is nested 2 level deep ex. [1,[2,[3,4]]]", () => {
    it("should return [1,2,3]", () => {
      let result = flattenList([1, [2, [3]]]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });
});

const flattenList = (list) => {
  if (list == null || list === undefined) return null;
  return list.flat(5);
};
