//Parent class
class Media {
    constructor (title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title (){
      return this._title;
    }
  
    get isCheckedOut (){
      return this._isCheckedOut;
    }
  
    get ratings (){
      return this._ratings;
    }
    //updates the isCheckedOut property
    set isCheckedOut (value){
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus (){
      this.isCheckedOut = !this.isCheckedOut;
    }
  
    getAverageRating (){
      let ratingsSum = this.ratings.reduce((accumulator,rating) =>
      accumulator + rating);
      return ratingsSum / this.ratings.length;
    }
  
    addRating(value){
      this.ratings.push(value);
    }
  }
  
  //child class
  class Book extends Media {
    constructor(author,pages,title){
      super(title);
      this._author = author;
      this._pages = 0;
    }
  
    get author (){
      return this._author;
    }
  
    get pages () {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(title,director,runTime){
      super(title);
      this._director = director;
      this._runTime = 0;
    }
  
    get director (){
      return this._director;
    }
  
    get runTime () {
      return this._runTime;
    }
  }
  //book instance
  const historyOfEverything = new Book ('Bill Bryson',544,'A Short History of Nearly Everything');
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4); //adding 3 ratings for the book
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  //Movie instance
  const speed = new Movie ('Speed','Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1); //adding 3 ratings for the book
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  