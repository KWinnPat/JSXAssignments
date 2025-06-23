function abbr(name) {
  if (!name) {
    return "";
  }
  const parts = name.split(" ");
  if (parts.length < 2) {
    return name;
  }
  return parts[0] + " " + parts[parts.length - 1][0] + ".";
}

function capitalizeFirst(string) {
  if (!string) {
    return "";
  }
  return string[0].toUpperCase() + string.slice(1);
}

function isBlankString(string) {
  if (string === null || string === "" || string.trim() === "") {
    return true;
  }
  return false;
}

function isString(string) {
  return typeof string === "string";
}

function sliceString(string) {
  if (!string) {
    return "";
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "g") {
      return string.slice(i);
    }
  }
  return string;
}

function truncate(string, length) {
  if (!string || length <= 0) {
    return "";
  }
  if (string.length <= length) {
    return string;
  }
  return string.slice(0, length) + "...";
}

console.log(isString("abc"));
console.log(isString(190));
console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));
console.log(capitalizeFirst("abcdef"));
console.log(abbr("Ryan Curtis"));
console.log(truncate("I am a long sentence", 6));
console.log(sliceString("The practitioners grappled on the road side!"));
