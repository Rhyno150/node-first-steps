// // export /import

// //npm init es6

// // create index.js
// // export the greet function from greet.js
// // import the greet function in index.js

// import greet  from './greet.js';
// import chalk from 'chalk';
// //  import { yo }   from './yo.js';
//  import cowsay from 'cowsay';
//  import figlet from 'figlet';



//  //const figlet = require('figlet');


//  figlet ('Hello, Ntombi', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(chalk.bgRed.whiteBright(data));
//  });

//  // required "cowsay"

//  const  cowMessage = cowsay.say({
//     text: "Hello, World!"
//  })
//  console.log(cowMessage);

 
// console.log(chalk.bgRed.white(cowsay.say({
//       text: greet('Ntombi')
// })));

 
// //console.log(greet('Ntombi'));


// //const styledMessage = chalk.bgGreen.black(greet('Xola'));

// // install it => npm install --save chalk
// // import it => import chalk from 'chalk';

// /*
// // import chalk from 'chalk';
// // import the greet module that is in current folder 
// import greet from './greet.js'
// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)


// */
// console.log(chalk.bgRed.whiteBright(greet('Ntombi')));

// //const chalk = require('chalk');

// let styledMessage = chalk.bgGreen.black(greet('Xola'));



//const styleMessage = chalk.bg.whiteBright()

//import function greet(name) {
  //  return "Hello, " + name + "!"
//}

//var chalk = require('chalk');
//import the greet module that is in the current folder

//console.log(greet("Hello, " + name + "!"));



//console.log(greet('Ntombi'));

// function greet() {
    // "Hello, " + name + "!";
// }





// Chalk


import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgRed.black(greet('Xola'));
console.log(styledMessage)

// Figlet


// ASCII

import figlet from 'figlet'
// var figlet = figlet("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
 // console.log(data);
  console.log(chalk.bgRed.whiteBright(data));
});

// TEXT
figlet.text(
    "Boom Boom Paw!",
    {
      font: "Invita",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );

//   textSync


console.log(
    figlet.textSync("Luvuyo!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );

//   Using Figlet  with a promise.
