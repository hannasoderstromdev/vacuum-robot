class Robot {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    };
    this.heading = "n";
    this.positionHistory = [{ x: 0, y: 0 }];
    this.numberOfUniqueSpotsCleaned = 1;
  }

  setStartingPosition(x, y) {
    this.position = { x, y };
    this.positionHistory[0] = { x, y };
  }

  getCurrentPosition() {
    return this.position;
  }

  getPositionHistory() {
    return this.positionHistory;
  }

  moveRobot(heading, steps) {
    for (let index = 0; index < steps; index++) {
      if (heading === "n") {
        this.position.y++;
      }

      if (heading === "e") {
        this.position.x++;
      }

      if (heading === "s") {
        this.position.y--;
      }

      if (heading === "w") {
        this.position.x--;
      }

      const existsInHistory = this.positionHistory.some(
        item => item.x == this.position.x && item.y == this.position.y
      );

      if (!existsInHistory) {
        this.numberOfUniqueSpotsCleaned++;
      }

      this.positionHistory.push({
        x: this.position.x,
        y: this.position.y
      });
    }
  }

  getNumberOfUniquePositionsCleaned() {
    return this.numberOfUniqueSpotsCleaned;
  }
}

module.exports = Robot;
