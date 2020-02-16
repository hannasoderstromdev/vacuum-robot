class Robot {
  private position: { x: number, y: number };
  private positionHistory: { x: number, y: number }[];
  private numberOfUniqueSpotsCleaned: number;

  constructor() {
    this.position = {
      x: 0,
      y: 0
    };
    this.positionHistory = [{ x: 0, y: 0 }];
    this.numberOfUniqueSpotsCleaned = 1;
  }

  public setStartingPosition(x: number, y: number) : void {
    this.position = { x, y };
    this.positionHistory[0] = { x, y };
  }

  public getCurrentPosition() : { x: number, y: number } {
    return this.position;
  }

  public getPositionHistory() : { x: number, y: number}[] {
    return this.positionHistory;
  }

  public moveRobot(heading: string, steps: number): void {
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
        (item: { x: number, y: number }) => item.x == this.position.x && item.y == this.position.y
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

  public getNumberOfUniquePositionsCleaned(): number {
    return this.numberOfUniqueSpotsCleaned;
  }
}

export default Robot
