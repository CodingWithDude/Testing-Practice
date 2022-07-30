function analyzeArray(array) {
  if (!validArray(array)) {
    return "not a valid array";
  } else {
    const sum = array.reduce((cur, prev) => {
      return cur + prev;
    });

    const length = array.length;

    const average = sum / length;

    const min = array.reduce((cur, prev) => {
      return Math.min(cur, prev);
    });

    const max = array.reduce((cur, prev) => {
      return Math.max(cur, prev);
    });

    const analyzedArray = {
      average: average,
      min: min,
      max: max,
      length: length,
    };

    return analyzedArray;
  }
}

function validArray(array) {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}

export { analyzeArray };
