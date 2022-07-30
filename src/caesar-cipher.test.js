import { caesarCipherEncrypt } from "./caesar-cipher";

test("wrap a to z", () => {
  expect(caesarCipherEncrypt("abcdefghijklmnopqrstuvwxyz")).toBe(
    "nopqrstuvwxyzabcdefghijklm"
  );
});

test("wrap a to z with symbols", () => {
  expect(caesarCipherEncrypt("this is a test with $symbols")).toBe(
    "guvf vf n grfg jvgu $flzobyf"
  );
});

test("wrap a to z with numbers", () => {
  expect(caesarCipherEncrypt("1this is a test with $symbols")).toBe(
    "1guvf vf n grfg jvgu $flzobyf"
  );
});

test("wrap a to z with Uppercase", () => {
  expect(caesarCipherEncrypt("1This is a test with $symbols")).toBe(
    "1guvf vf n grfg jvgu $flzobyf"
  );
});
