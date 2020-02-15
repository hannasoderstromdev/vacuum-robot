const Robot = require("./Robot");

describe("Robot", () => {
  describe("setStartingPosition", () => {
    const robot = new Robot();

    it("can set starting position", () => {
      robot.setStartingPosition(1, 1);

      const { x, y } = robot.getCurrentPosition();

      expect(x).toBe(1);
      expect(y).toBe(1);
    });

    describe("moveRobot", () => {
      it("can move a number of steps north", () => {
        const robot = new Robot();
        const heading = "n";
        const steps = 5;

        robot.moveRobot(heading, steps);

        const { x, y } = robot.getCurrentPosition();

        expect(x).toBe(0);
        expect(y).toBe(0 + steps);
      });

      it("can move a number of steps east", () => {
        const robot = new Robot();
        const heading = "e";
        const steps = 5;

        robot.moveRobot(heading, steps);

        const { x, y } = robot.getCurrentPosition();

        expect(x).toBe(0 + steps);
        expect(y).toBe(0);
      });

      it("can move a number of steps south", () => {
        const robot = new Robot();
        const heading = "s";
        const steps = 5;

        robot.moveRobot(heading, steps);

        const { x, y } = robot.getCurrentPosition();

        expect(x).toBe(0);
        expect(y).toBe(0 - steps);
      });

      it("can move a number of steps west", () => {
        const robot = new Robot();
        const heading = "w";
        const steps = 5;

        robot.moveRobot(heading, steps);

        const { x, y } = robot.getCurrentPosition();

        expect(x).toBe(0 - steps);
        expect(y).toBe(0);
      });

      it("adds all positions passed to positionHistory", () => {
        const robot = new Robot();
        const heading = "n";
        const steps = 5;

        robot.moveRobot(heading, steps);

        const positionHistory = [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: 2 },
          { x: 0, y: 3 },
          { x: 0, y: 4 },
          { x: 0, y: 5 }
        ];

        expect(robot.getPositionHistory()).toEqual(positionHistory);
      });
    });
  });

  describe("getNumberOfUniquePositionsCleaned", () => {
    it.only("should return number of unique positions cleaned", () => {
      const robot = new Robot();

      robot.moveRobot("n", 2); // 3
      robot.moveRobot("s", 2); // 3
      robot.moveRobot("e", 3); // 6
      robot.moveRobot("w", 3); // 6

      const nrOfUniquePositionsCleaned = 6;

      expect(robot.getNumberOfUniquePositionsCleaned()).toEqual(
        nrOfUniquePositionsCleaned
      );
    });
  });
});
