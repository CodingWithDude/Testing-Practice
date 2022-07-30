import { reverseString } from "./reverse-string";

test("Return reversed string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

test("Return reversed empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Return reversed string with numbers ", () => {
  expect(reverseString("1234")).toBe("4321");
});
