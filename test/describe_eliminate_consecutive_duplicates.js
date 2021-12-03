const chai = require("chai");
const expect = chai.expect;

describe("eliminate consecutive duplicates in a list ", () => {
  context("if list is not provided", () => {
    it("should return nothing", () => {
      let result = eliminateConsecutiveDuplicates();
      expect(result).to.be.eql(null);
    });
  });
  context("if list is empty", () => {
    it("should return empty list", () => {
      let result = eliminateConsecutiveDuplicates([]);
      expect(result).to.be.eql([]);
    });
  });
  context("if list has no consecutive duplicates ex. [1,2,3,4]", () => {
    it("should return same list", () => {
      let result = eliminateConsecutiveDuplicates([1, 2, 3, 4]);
      expect(result).to.be.eql([1, 2, 3, 4]);
    });
  });
  context(
    "if list has consecutive duplicates ex. [1,1,2,2,3,3,3,4,4,4,4,4,5,5]",
    () => {
      it("should return list with no duplicates ex. [1,2,3,4,5]", () => {
        let result = eliminateConsecutiveDuplicates([
          1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
        ]);
        expect(result).to.be.eql([1, 2, 3, 4, 5]);
      });
    }
  );
});

const eliminateConsecutiveDuplicates = (list) => {
  if (list === undefined || list === null) return null;
  if (list.length === 0) return [];
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (i == 0) result.push(list[i]);
    else {
      if (list[i] == result[result.length - 1]) continue;
      else result.push(list[i]);
    }
  }

  return result;
};
