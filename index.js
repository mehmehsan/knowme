var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name : ");

var score = 0;

console.log("Welcome ! " + userName.toUpperCase() + " Do you know Sandeep ?");

console.log();
     console.log("--------------------------------");
  console.log();
console.log("Rules for assesment : ");
console.log();
console.log("a) Answer it in one word ");
console.log("b) You must not be intelligent Enough ");
console.log("c) Keep awaited for next question to come");
console.log("d) Your score gets down if you don't know me");
console.log();
   console.log("--------------------------------");
console.log();

var opTn=readlineSync.question("Do you want to continue(y/n) : ");

if(opTn.toLowerCase()==="y"){
console.clear();
}

else{
console.log("Thanks for the vote ! Bye ! Bye !");
console.log();
process.exit();
}

function fn1(question,answer){
  var Ans=readlineSync.question(question);
  console.log();
    console.log("-----------");

  if(Ans.toLowerCase() == answer.toLowerCase()){
    console.log("You are Right !");
    score++;

  }

  else {
   console.log("You are Wrong !"); 
     console.log("Ans is : ", answer);
  }

  console.log("Score : ", score);
  console.log("-----------");

  
  console.log();
  console.log("**** Wait for few seconds! ****");

}

var questions = [ { question : "Which car do I like ? : ", answer : "Mustang"},{ question : "Where do I live ? : ", answer : "Ahmedabad"} , { question : "Which color do I like ? : ", answer : "Blue"} ];

for( var i=0; i<questions.length;i++){
  var currentQues = questions[i];


  fn1(currentQues.question,currentQues.answer);
   for(var j=0;j<800000;j++){

      }
  console.clear();
}
if(i==questions.length){
  console.log();
  console.log("Yeah ! Your score is : ", score);
  console.log();
  console.log("Thanks for playing buddy !");
}