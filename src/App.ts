import inputOutputHandler from "./inputOutputHandler";
import Robot from "./Robot";

class App {
  private robot: Robot;
  public numberOfCommands: number;

  constructor() {
    this.robot = new Robot();
    this.numberOfCommands = 0;

    this.parseForExpectedNumberOfCommands = this.parseForExpectedNumberOfCommands.bind(
      this
    );
    this.parseForStartingPosition = this.parseForStartingPosition.bind(this);
    this.parseForMovement = this.parseForMovement.bind(this);
  }

  parseForExpectedNumberOfCommands(text: string): void {
    if (text === "q") {
      this.quit();
    }

    this.numberOfCommands = parseInt(text);
  }

  parseForStartingPosition(text: string): void {
    if (text === "q") {
      this.quit();
    }

    const parsedText = text.split(" ");

    const x = parseInt(parsedText[0]);
    const y = parseInt(parsedText[1]);

    this.robot.setStartingPosition(x, y);
  }

  parseForMovement(text: string): void {
    if (text === "q") {
      this.quit();
    }

    const parsedText = text.split(" ");

    const heading = parsedText[0];
    const steps = parseInt(parsedText[1]);

    this.robot.moveRobot(heading, steps);
  }

  quit(): void {
    const count = this.robot.getNumberOfUniquePositionsCleaned();

    console.log(`You cleaned a total of ${count} spots. Goodbye!`);
    process.exit();
  }

  async start(): Promise<void> {
    try {
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
    } catch (error) {
      throw Error(error);
    }
    this.quit();
  }
}

export default App
