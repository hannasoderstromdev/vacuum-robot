const Robot = require("./Robot");
const inputOutputHandler = require("./inputOutputHandler");

class App {
  constructor() {
    this.robot = new Robot();
    this.numberOfCommands = 0;

    this.parseForExpectedNumberOfCommands = this.parseForExpectedNumberOfCommands.bind(
      this
    );
    this.parseForStartingPosition = this.parseForStartingPosition.bind(this);
    this.parseForMovement = this.parseForMovement.bind(this);
  }

  parseForExpectedNumberOfCommands(text) {
    if (text === "q") {
      this.quit();
    }

    this.numberOfCommands = parseInt(text);
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
    const count = this.robot.getNumberOfUniquePositionsCleaned();

    console.log(`You cleaned a total of ${count} spots. Goodbye!`);
    process.exit();
  }

  async start() {
    await inputOutputHandler(
      "Enter total number of movements to expect:\n",
      this.parseForExpectedNumberOfCommands
    );

    await inputOutputHandler(
      "Enter coordinates for robot starting position:\n",
      this.parseForStartingPosition
    );

    let commandCount = 0;

    while (commandCount < this.numberOfCommands) {
      const count = this.robot.getNumberOfUniquePositionsCleaned();

      await inputOutputHandler(
        `=> Cleaned ${count}\nEnter heading (N/E/S/W) and number of steps:\n`,
        this.parseForMovement
      );

      commandCount++;
    }

    this.quit();
  }
}

module.exports = App;
