const SLR = require('ml-regression').SLR;
document.getElementById('hello').innerText = 'Using ml-regression';
// let inputs = [80,60,10,20,30];
// let outputs = [20,40,30,50,60];

// let regression = new SLR(inputs, outputs);
//console.log(regression.predict(80));

const xtrain = [78,70,06,70,74,64,73.9,76.32,72.98,58.85];
const ytrain = [7855,7359,7705,7614,8347,8619,7356,1587,8854, 7500];

// Building our model
let regression = new SLR(xtrain, ytrain);

console.log(regression.predict(80)); // apply the model
console.log(regression.coefficients);
console.log(regression.toString(3));