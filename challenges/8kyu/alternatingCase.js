String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
};
