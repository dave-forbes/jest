const reverseString = (string) => {
  if (typeof string !== "string") return "not a string";
  return string.split("").reverse().join("");
};

export default reverseString;
