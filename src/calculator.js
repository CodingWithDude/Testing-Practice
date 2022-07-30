function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return "Invalid inputs";
  }
}

function subtract(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "Invalid inputs";
  }
}

function multiply(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    return "Invalid inputs";
  }
}

function divide(a, b) {
  if (typeof a === "number" && typeof b === "number" && b !== 0) {
    if (b !== 0) {
      return a / b;
    }
  } else {
    return "Invalid inputs";
  }
}

export { add, subtract, multiply, divide };
