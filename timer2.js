const readline = require('readline');
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

prompt = () => {
  stdin.on('data', (input) => {
    if (input === 'b') {
      process.stdout.write('.');
      setTimeout(prompt, 50);
    } if (!isNaN(input) && input !== '0') {
      console.log(`Setting timer for ${input} seconds`);
      setTimeout(() => {
        process.stdout.write('.\n');
          prompt();
      }, Number(input) * 1000);
    } if (input === '\u0003') {
      process.stdout.write("Thanks for using me, ciao!\n");
      process.exit();
    }
  });
}

prompt();
console.log('I am the timer, a number and an alarm will beep in that many seconds, or you can press b for the alarm to happen right now!   ');



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let prompt = () => {
//   rl.question('I am the timer, a number and an alarm will beep in that many seconds, or you can press b for the alarm to happen right now!   ', (input) => {
    
    
//   });
// };

// prompt();

