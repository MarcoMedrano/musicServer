export default class Human {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };
  toString () {
    return `Human: ${this.firstName} ${this.lastName}`;
  }
}