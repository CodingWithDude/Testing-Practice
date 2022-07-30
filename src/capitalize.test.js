import { capitalize } from "./capitalize";

test("Capitalize first character of a string", () => {
  expect(capitalize("fart")).toBe("Fart");
});

test("starts with a number", () => {
  expect(capitalize("123")).toBe("Invalid string, must start with a letter");
});

test("starts with a space", () => {
  expect(capitalize(" alpha")).toBe("Invalid string, must start with a letter");
});

test("empty string", () => {
  expect(capitalize("")).toBe("Invalid string, must start with a letter");
});

test("starts with a symbol", () => {
  expect(capitalize("#")).toBe("Invalid string, must start with a letter");
});

test("starts with a capital letter", () => {
  expect(capitalize("Alpha")).toBe("Alpha");
});
