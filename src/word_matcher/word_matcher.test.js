const wordMatcher = require("./word_matcher");

describe("Word Matcher tests", () => {
  test("Should return green characters", () => {
    const secretTestWord = "ready";
    const testAttemt = "rpppp";
    const expectedResult = { 0: { color: "green", character: "r" } };
    const result = wordMatcher(secretTestWord, testAttemt);
    expect(result[0]).toEqual(expectedResult[0]);
  });
  test("Should return yellow characters", () => {
    const secretTestWord = "ready";
    const testAttemt = "epppp";
    const expectedResult = { 0: { color: "yellow", character: "e" } };
    const result = wordMatcher(secretTestWord, testAttemt);
    expect(result[0]).toEqual(expectedResult[0]);
  });
  test("Should return gray characters", () => {
    const secretTestWord = "ready";
    const testAttemt = "ppppp";
    const expectedResult = { 0: { color: "gray", character: "p" } };
    const result = wordMatcher(secretTestWord, testAttemt);
    expect(result[0]).toEqual(expectedResult[0]);
  });
  test("Should return green,yellow and  gray characters", () => {
    const secretTestWord = "tes";
    const testAttemt = "tsa";
    const expectedResult = {
      0: { color: "green", character: "t" },
      1: { color: "yellow", character: "s" },
      2: { color: "gray", character: "a" },
    };
    const result = wordMatcher(secretTestWord, testAttemt);
    expect(result).toEqual(expectedResult);
  });
});
