//8 ball code//

let userName = 'Emmett';
userName ? console.log(`Hello, ${userName}!`)
 : console.log('Hello!');

let userQuestion = 'Can you answer my question?';

console.log(`User ${userName} wishes to ask: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
  case 1:
  console.log('It is certain');
  break;
  case 2:
  console.log('It is decidedly so');
  break;
  case 3:
  console.log('Reply hazy try again');
  break;
  case 4:
  console.log('Cannot predict now');
  break;
  case 5:
  console.log('Do not count on it');
  break;
  case 6:
  console.log('My sources say no');
  break;
  case 7:
  console.log('Outlook not so good');
  break;
  case 0:
  console.log('Signs point to yes');
  break;
}

//Race Day//

