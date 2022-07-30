function capitalize(string) {
  if (string.charAt(0).match(/[A-Za-z]/)) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return "Invalid string, must start with a letter";
  }
}

export { capitalize };
