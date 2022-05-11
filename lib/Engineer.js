// Importing the Employee function from which the Engineer class inherits its behavior and properties
const Employee = require("../lib/Employee");

// Create an Engineer class that extends Employee so that it inherits Employee's properties and methods
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Calling the employee constructor and accessing its properties and methods
    super(name, id, email);

    this.github = github;
  }

  // This method returns the Engineer's github from input
  getGithub() {
    return this.github;
  }

  // This method overrides Employee and returns Engineer
  getRole() {
    return "Engineer";
  }
}

// Exporting Manager
module.exports = Engineer;
