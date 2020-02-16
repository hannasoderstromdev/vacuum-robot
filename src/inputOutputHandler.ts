function asyncInputOutputHandler(text: string, callback: Function) {
  process.stdin.setEncoding('utf-8')
  process.stdout.write(text);

  return new Promise((resolve) => {
    process.stdin.once("data", function(data) {
      resolve(callback(data.toString().trim()));
    });
    process.stdin.pause();
  });
}

export default asyncInputOutputHandler;
