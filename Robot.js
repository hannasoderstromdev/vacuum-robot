class Robot {
  constructor() {
    this.position = {
      x: 0,
      y: 0
    };
    this.heading = "N";
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
      if (heading === "N") {
        this.position.y++;
      }

      if (heading === "E") {
        this.position.x++;
      }

      if (heading === "S") {
        this.position.y--;
      }

      if (heading === "W") {
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
