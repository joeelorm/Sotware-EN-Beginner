/* Magic Eight Ball
You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune. */

let username = 'Joseph';
username?console.log(`Hello, ${username}!`):console.log('Hello!')

const userQuestion = 'Will I kiss Seyram tonight?';

console.log(`${username}, is this the question you asked: \'${userQuestion}\'`)

const randomNumber = Math.floor(Math.random() * 8)
console.log(randomNumber)

let eightBall = ' ';

// if(randomNumber === 0) {
//   console.log('Do not count on it')
// }else if (randomNumber === 1){
//   console.log('Cannot predict now');
// }else if (randomNumber === 2){
//   console.log('Reply hazy try again');
// }else if (randomNumber === 3){
//   console.log('My sources say no');
// }else if (randomNumber === 4){
//   console.log('Outlook not so good');
// }else if (randomNumber === 5){
//   console.log('signs point to yes');
// }else if (randomNumber === 6){
//   console.log('It is certain');
// }else if (randomNumber === 7){
//   console.log('It is decidedly so');
// }

switch(randomNumber){
  case 0:
    console.log('Do not count on it');
    break;
  case 1:
    console.log('Cannot predict now');
    break;
  default:
    console.log('Fuck off!');
    break;
}
