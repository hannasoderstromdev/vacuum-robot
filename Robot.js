class Robot {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    };
    this.heading = "n";
    this.cleanedPositions = [{ x: 0, y: 0 }];
  }

  setStartingPosition(x, y) {
    this.position = { x, y };
    this.cleanedPositions[0] = { x, y };
  }

  moveRobot(heading, steps) {
    for (let index = 0; index < steps; index++) {
      if (heading === "n") {
        this.position.y += 1;
      }

      if (heading === "e") {
        this.position.x += 1;
      }

      if (heading === "s") {
        this.position.y -= 1;
      }

      if (heading === "w") {
        this.position.x -= 1;
      }

      this.cleanedPositions.push({
        x: this.position.x,
        y: this.position.y
      });
    }
  }
}

module.exports = Robot;
