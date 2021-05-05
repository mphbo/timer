const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let prompt = () => {
  rl.question('I am the timer, a number and an alarm will beep in that many seconds, or you can press b for the alarm to happen right now!   ', (input) => {
    
    if (input === 'b') {
      process.stdout.write('.');
      prompt();
    } if (!isNaN(input) && input !== '0') {
      console.log(`Setting timer for ${input} seconds`);
      setTimeout(() => {
        process.stdout.write('.\n');
          prompt();
      }, Number(input) * 1000);
    } if (input === 'v') {
      process.stdout.write("Thanks for using me, ciao!\n");
      process.exit();
    }
  });
};

prompt();

