class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAges = function (secondUser) {
    if (this.age > secondUser.age) {
      console.log(this.firstName + " " + "è più vecchio di" + " " + secondUser.firstName);
    } else {
      console.log(secondUser.firstName + " " + "è più vecchio di" + " " + this.firstName);
    }
  };
}

const firstUser = new User("Giacomo", "Poretti", 69, "Milano");
const secondUser = new User("Giovanni", "Storti", 68, "Monferrato");

// console.log(firstUser);
// console.log(secondUser);

firstUser.compareAges(secondUser);
