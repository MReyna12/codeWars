const Ball = function (ballType) {
  this.ballType = ballType;
  if (!this.ballType) {
    return (this.ballType = "regular");
  }
};

class Ball {
  constructor(ballType) {
    this.ballType = ballType;
    if (!this.ballType) {
      this.ballType = "regular";
    }
  }
}
