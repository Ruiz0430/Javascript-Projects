//Creation of school class
class School {
  constructor (name, level, numberOfStudents){
    this._name = '';
    this._level= '';
    this._numberOfStudents= 0;
  }

  get name () {
    return this._name;
  }
  get level () {
    return this._level;
  }
  get numberOfStudents () {
    return this._numberOfStudents;
  }
  quickFacts () {
    console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level`);
  }
  static pickSubstituteTeacher (substituteTeachers){
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }

  set numberOfStudents (value) {
    if(value.isNaN ()){ //ensures value of "numberOfStudents" is in fact a number
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    } else {
      this._numberOfStudents = value;
    }
  }
}
//inherits school class
class PrimarySchool extends School {
  constructor (name, numberOfStudents, pickUpPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
    
  }
  get pickUpPolicy (){
    return this._pickUpPolicy;
  }
}
//inherits school class
class HighSchool extends School {
  constructor (name, numberOfStudents, sportsTeams){
  super (name,'high', numberOfStudents);
  this._sportsTeams = sportsTeams;
}
get sportsTeams (){
  return this._sportsTeams;
}
}
//PrimarySchool instance: Lorraine
const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const sub =
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

//HighSchool instance: Al
const alSmith = new HighSchool('Al E. Smith',415,['Basketball','Volleyball','Track and Field']);
console.log(alSmith.sportsTeams)

