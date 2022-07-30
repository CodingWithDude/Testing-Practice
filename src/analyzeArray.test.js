import { analyzeArray } from "./analyzeArray";

test("return average, min, max, length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1,
  });
});

test("test with string", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, "6"])).toEqual("not a valid array");
});

test("test with non array", () => {
  expect(analyzeArray(1, 2, 3)).toEqual("not a valid array");
});

test("test with symbols", () => {
  expect(analyzeArray("!")).toEqual("not a valid array");
});

test("test with zeros", () => {
  expect(analyzeArray([0, 0, 0, 0, 0, 0])).toEqual({
    average: 0,
    length: 6,
    max: 0,
    min: 0,
  });
});
