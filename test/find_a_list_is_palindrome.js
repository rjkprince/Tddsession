const chai = require("chai");
const expect = chai.expect;

describe("find a list is palindrome", () => {
  context("when no list is provided", () => {
    it("should return false", () => {
      let result = isListPalindrome();
      expect(result).to.be.eql(false);
    });
  });

  context("when list is empty", () => {
    it("should return true", () => {
      let result = isListPalindrome([]);
      expect(result).to.be.eql(true);
    });
  });

  context("when list has one item", () => {
    it("should return true", () => {
      let result = isListPalindrome([2]);
      expect(result).to.be.eql(true);
    });
  });

  context("when list is [1,2,3]", () => {
    it("should return false", () => {
      let result = isListPalindrome([1, 2, 3]);
      expect(result).to.be.eql(false);
    });
  });

  context("when list is [3,2,3]", () => {
    it("should return true", () => {
      let result = isListPalindrome([3, 2, 3]);
      expect(result).to.be.eql(true);
    });
  });
});

const isListPalindrome = (list) => {
  if (list === undefined || list === null) return false;
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    if (list[left] != list[right]) return false;
    left++;
    right--;
  }
  return true;
};
