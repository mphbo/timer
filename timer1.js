const arg = process.argv;

const timer1 = (array) => {
  for (let item of array) {
    if (array.length !== 0 && item > 0) {
      setTimeout(() => {
        process.stdout.write('.');
      }, item * 1000);
    }
  }
};

timer1(arg);