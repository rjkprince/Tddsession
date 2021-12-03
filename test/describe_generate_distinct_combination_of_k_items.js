const chai = require("chai");
const expect = chai.expect;

describe("generate distinct combinations of k items from a list", () => {
  context("if list is not provided", () => {
    it("should return nothing", () => {
      let result = generateCombination();
      expect(result).to.be.eql(null);
    });
  });

  context("if k is not provided", () => {
    it("should return the same list", () => {
      let result = generateCombination([1, 2, 3]);
      expect(result).to.be.eql([1, 2, 3]);
    });
  });

  context("if k is greater than length of the list", () => {
    it("should throw error ex. k can't be greater than length of the list", () => {
      expect(() => {
        generateCombination([1, 2, 3], 5);
      }).to.throw(Error, "k must be lesser than length of the list");
    });
  });

  context("if k is lesser than length of the list", () => {
    it("should return list of distinct combinations", () => {
      let result = generateCombination([1, 2, 3, 4], 2);
      expect(result).to.be.eql([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ]);
    });
  });
});

const generateCombination = (list, k) => {
  if (list === undefined || list === null) return null;
  if (k === undefined || k === null) return list;
  if (k > list.length)
    throw new Error("k must be lesser than length of the list");
  let index = [];
  let n = list.length;

  for (let j = 0; j < k; j++) index[j] = j;
  index[k] = n;

  let ok = true;
  let result = [];

  while (ok) {
    let comb = [];
    for (let j = 0; j < k; j++) comb[j] = list[index[j]];
    result.push(comb);

    ok = false;

    for (let j = k; j > 0; j--) {
      if (index[j - 1] < index[j] - 1) {
        index[j - 1]++;
        for (let l = j; l < k; l++) index[l] = index[l - 1] + 1;
        ok = true;
        break;
      }
    }
  }

  return result;
};
