const convert = (word) => {
  return word
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase()+ word.slice(1)
    )
    .join("");
};

console.log(convert("mayur-kasliwal-amdocs"));
