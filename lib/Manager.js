/* Importing the Employee function from which the Manager class inherits its behavior and properties*/
const Employee = require("../lib/Employee");

// Create a Manager class that extends Employee so that it inherits Employee's properties and methods
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Calling the employee constructor and accessing its properties and methods
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // getRole() Overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

// Exporting Manager
module.exports = Manager;
