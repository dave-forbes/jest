const capitalize = (string) => {
  if (typeof string !== "string") return "not a string";
  return string.replace(string[0], string[0].toUpperCase());
};
export default capitalize;
