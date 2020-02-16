const asyncInputOutputHandler = require("./inputOutputHandler");
const mockProcess = require("jest-mock-process");

describe("inputOutputHandler", () => {
  it("returns a promise", async () => {
    const callback = jest.fn();
    const mockStdout = mockProcess.mockProcessStdout();
    // const stdout = spyOnImplementing(process.stdin, "write", () => "");
    // const stdin = spyOnImplementing(process.stdin, "read", () => "");
    const result = await asyncInputOutputHandler("Text", callback);

    expect(result).toEqual("Text");
    expect(mockStdout).toHaveBeenCalled();
    // expect(callback).toHaveBeenCalled();
  });
});
