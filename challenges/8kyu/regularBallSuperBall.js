const Ball = function (ballType) {
  this.ballType = ballType;
  if (!this.ballType) {
    return (this.ballType = "regular");
  }
};
