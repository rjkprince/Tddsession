const chai = require("chai");
const expect = chai.expect;

describe("reverse a list", () => {
  context("when the list is empty", () => {
    it("should return the empty list", () => {
      let result = reverseList([]);
      expect(result).to.be.empty;
    });
  });

  context("when the list has one itme", () => {
    it("should return the list", () => {
      let result = reverseList([1]);
      expect(result).to.be.eql([1]);
    });
  });

  context("when the list has multiple itmes", () => {
    it("should return the reversed list", () => {
      let result = reverseList([1, 2, 3]);
      expect(result).to.be.eql([3, 2, 1]);
    });
  });
});

const reverseList = (list) => {
  let result = [];
  for (let i = list.length - 1; i >= 0; i--) result.push(list[i]);
  return result;
};
