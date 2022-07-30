import { add, subtract, multiply, divide } from "./calculator";

// add
test("sum of a + b", () => {
  expect(add(1, 2)).toBe(3);
});

test("sum of a + b with letter", () => {
  expect(add("a", 2)).toBe("Invalid inputs");
});

test("sum of a + b with symbol", () => {
  expect(add(3, "?")).toBe("Invalid inputs");
});

test("sum of a + b with space", () => {
  expect(add(3, " ")).toBe("Invalid inputs");
});

test("sum of a + b with decimal", () => {
  expect(add(3, ".5")).toBe("Invalid inputs");
});

// subtract
test("sum of a - b", () => {
  expect(subtract(1, 2)).toBe(-1);
});

test("sum of a - b with letter", () => {
  expect(subtract("a", 2)).toBe("Invalid inputs");
});

test("sum of a - b with symbol", () => {
  expect(subtract(3, "?")).toBe("Invalid inputs");
});

test("sum of a - b with space", () => {
  expect(subtract(3, " ")).toBe("Invalid inputs");
});

test("sum of a - b with decimal", () => {
  expect(subtract(3, 0.5)).toBe(2.5);
});

// multiply
test("sum of a * b", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("sum of a * b with letter", () => {
  expect(multiply("a", 2)).toBe("Invalid inputs");
});

test("sum of a * b with symbol", () => {
  expect(multiply(3, "?")).toBe("Invalid inputs");
});

test("sum of a * b with space", () => {
  expect(multiply(3, " ")).toBe("Invalid inputs");
});

test("sum of a * b with decimal", () => {
  expect(multiply(3, 0.5)).toBe(1.5);
});

// divide
test("sum of a / b", () => {
  expect(divide(1, 0)).toBe("Invalid inputs");
});
