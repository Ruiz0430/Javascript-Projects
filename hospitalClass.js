//Parent class
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  //static method to create random password between 0 and 10,000
 static generatePassword (){
    return Math.floor(Math.random()*10000);
  }
}
//child class
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  //allows user to add new certs. 
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}
//first instance of nurse
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5); //passes amount of days off
console.log(`Nurse: ${nurseOlynyk.name}`);
console.log("Remaining Vacation Days: "+nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics'); //adds the 'Genetics' cert. to nurse Olynyk
console.log("Certifications:" + nurseOlynyk.certifications);
