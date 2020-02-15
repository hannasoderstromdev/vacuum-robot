const Robot = require("./Robot");

describe("Robot", () => {
  describe("setStartingPosition", () => {
    const robot = new Robot();

    it("can set starting position and add it to list of cleaned positions", () => {
      const x = 1;
      const y = 1;
      robot.setStartingPosition(x, y);
      expect(robot.position.x).toBe(x);
      expect(robot.position.y).toBe(y);
      expect(robot.cleanedPositions.length).toEqual(1);
      expect(robot.cleanedPositions[0]).toEqual({ x, y });
    });

    describe("moveRobot", () => {
      it("can move a number of steps north", () => {
        const robot = new Robot();
        const heading = "n";
        const steps = 5;
        robot.moveRobot(heading, steps);

        expect(robot.position.x).toBe(0);
        expect(robot.position.y).toBe(0 + steps);
      });

      it("can move a number of steps east", () => {
        const robot = new Robot();
        const heading = "e";
        const steps = 5;
        robot.moveRobot(heading, steps);

        expect(robot.position.x).toBe(0 + steps);
        expect(robot.position.y).toBe(0);
      });

      it("can move a number of steps south", () => {
        const robot = new Robot();
        const heading = "s";
        const steps = 5;
        robot.moveRobot(heading, steps);

        expect(robot.position.x).toBe(0);
        expect(robot.position.y).toBe(0 - steps);
      });

      it("can move a number of steps west", () => {
        const robot = new Robot();
        const heading = "w";
        const steps = 5;
        robot.moveRobot(heading, steps);

        expect(robot.position.x).toBe(0 - steps);
        expect(robot.position.y).toBe(0);
      });

      it("adds all positions passed to cleanedPositions", () => {
        const robot = new Robot();
        const heading = "n";
        const steps = 5;
        robot.moveRobot(heading, steps);
        const cleanedPositions = [
          { x: 0, y: 0 },
          { x: 0, y: 1 },
          { x: 0, y: 2 },
          { x: 0, y: 3 },
          { x: 0, y: 4 },
          { x: 0, y: 5 }
        ];
        expect(robot.cleanedPositions).toEqual(cleanedPositions);
      });
    });
  });
});
