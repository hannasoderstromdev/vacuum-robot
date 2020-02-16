const Robot = require("./Robot");
const inputOutputHandler = require("./inputOutputHandler");

class App {
  constructor() {
    this.robot = new Robot();

    this.parseForStartingPosition = this.parseForStartingPosition.bind(this);
    this.parseForMovement = this.parseForMovement.bind(this);
  }

  parseForStartingPosition(text) {
    if (text === "q") {
      this.quit();
    }

    const parsedText = text.split(" ");

    const x = parseInt(parsedText[0]);
    const y = parseInt(parsedText[1]);

    this.robot.setStartingPosition(x, y);
  }

  parseForMovement(text) {
    if (text === "q") {
      this.quit();
    }

    const parsedText = text.split(" ");

    const heading = parsedText[0];
    const steps = parseInt(parsedText[1]);

    this.robot.moveRobot(heading, steps);
  }

  quit() {
    console.log("Goodbye");
    process.exit();
  }

  async start() {
    await inputOutputHandler(
      "Enter coordinates for robot starting position:\n",
      this.parseForStartingPosition
    );

    while (true) {
      const count = this.robot.getNumberOfUniquePositionsCleaned();

      await inputOutputHandler(
        `=> Cleaned ${count}\nEnter heading (n/e/s/w) and number of steps:\n`,
        this.parseForMovement
      );
    }
  }
}

module.exports = App;
