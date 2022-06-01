String.prototype.isUpperCase = function () {
  console.log(this);
  return JSON.stringify(this) === JSON.stringify(this).toUpperCase();
};
