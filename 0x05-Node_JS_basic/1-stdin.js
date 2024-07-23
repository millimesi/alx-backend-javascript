console.log('Welcome to Holberton School, what is your name?');
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question("Welcome to Holberton School, what is your name?", name => {
//     console.log(`Your name is: ${name}`)
// })

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('close', () => {
  console.log('This important software is now closing');
});
