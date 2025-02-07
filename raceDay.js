let raceNumber = Math.floor(Math.random() * 1000); //assigns random number to racer
let registerEarly = true; //checks whether the person registered early
let max = 70; //max age of participant
let min = 14; //min age of participant
let age = Math.floor(Math.random() * (max-min) + min );
console.log(`Participants Age: ${age}`);
if (registerEarly === true && age > 18){
  raceNumber += 1000;
  console.log(`Your race number is: ${raceNumber}`);
  console.log('Early adults run at 9:00 am');
}
else if (registerEarly === false && age >18){
  raceNumber += 1000;
  console.log(`Your race number is: ${raceNumber}`);
  console.log('Late adults run at 11:00 am');
}
else if (age < 18){
  console.log(`Your race number is: ${raceNumber}`);
  console.log('Youth registrants run at 12:30 pm');
}
else {
  console.log('Please see the front desk')
}