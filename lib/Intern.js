// Importing the Employee function from which the Intern class inherits its behavior and properties
const Employee = require("../lib/Employee");

// Create an Intern class that extends Employee so that it inherits Employee's properties and methods
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Calling the employee constructor and accessing its properties and methods
    super(name, id, email);

    this.school = school;
  }

  // This method returns the Intern's school from input
  getSchool() {
    return this.school;
  }

  // This method returns the Intern's role from input
  getRole() {
    return "Intern";
  }
}
// Exporting Intern
module.exports = Intern;
