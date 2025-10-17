function splitAndMerge(string, separator) {
  const data = string.split(" ");
  let result = "";

  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      result += `${data[i].split("").join(`${separator}`)}`;
    } else {
      result += ` ${data[i].split("").join(`${separator}`)}`;
    }
  }

  return result;
}

console.log(splitAndMerge("My name is John", "-"));
