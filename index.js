// Establishing generateHTML as a usable variable in index.js and require importing generateHTML() from src folder
const generateHTML = require("./src/generateHTML");

// Establishing Manager, Engineer and Intern as usable variables in index.js and require importing Manager(), Engineer() and Intern() constructors from lib folder
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Importing fs and inquirer node modules
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

// Creating an array that holds new objects created from user input
const employeeArray = [];

// Making a function that generates Manager object from the command line user inputs
const addManager = () => {
  return inquirer
    .prompt([
      // Manager's name
      {
        type: "input",
        name: "name",
        message: "Please enter the manager's name here (Required)  =>:",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log("You must enter the manager's name to proceed!  =>:");
          }
        },
      },

      // Manager's ID
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID number here. (Required)  =>:",
        validate: (userNameInput) => {
          if (isNaN(userNameInput)) {
            console.log(
              "Ops! An ID with a number value is required to proceed!"
            );
            // return false;
          } else {
            return true;
          }
        },
      },

      // Manager's email
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email address here.  =>:",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },

      // Manager's office number
      {
        type: "input",
        name: "officeNumber",
        message:
          "Please enter the manager's office number here. (Required)  =>:",
        validate: (userNameInput) => {
          if (isNaN(userNameInput)) {
            console.log(
              "Ops! Office number with a number value is required to proceed!"
            );
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerUserInput) => {
      const { name, id, email, officeNumber } = managerUserInput;
      const manager = new Manager(name, id, email, officeNumber);

      employeeArray.push(manager);
      console.log(manager);
    });
};

// Making a function that generates employee objects from the command line user inputs
const addEmployee = () => {
  console.log(`
  
    XXXXXXXXXXXXXXXXXXXXXXXXXXX

    Adding Employee to the team

    XXXXXXXXXXXXXXXXXXXXXXXXXXX

    `);

  return inquirer
    .prompt([
      // Role
      {
        type: "list",
        name: "role",
        message: "Select the employee's role from the following list!",
        choices: ["Engineer", "Intern"],
      },

      // Employee's name
      {
        type: "input",
        name: "name",
        message: "Please enter the employee name here (Required)  =>:",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log("You must enter the employee name to proceed!");
          }
        },
      },

      // Employee's ID
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID number here. (Required)  =>:",
        validate: (userNameInput) => {
          if (isNaN(userNameInput)) {
            console.log(
              "Ops! An ID with a number value is required to proceed!"
            );
            return false;
          } else {
            return true;
          }
        },
      },

      // employee's email
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email address here.  =>:",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter a valid email address!");
            return false;
          }
        },
      },

      // Employee's github
      {
        type: "input",
        name: "github",
        message:
          "Please enter the employee's github user name here! (Required)  =>:",
        when: (userInput) => userInput.role === "Engineer",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log(
              "To proceed, the employee's github username must be provided!"
            );
          }
        },
      },
      // Intern's school
      {
        type: "input",
        name: "school",
        message:
          "Please enter the entern's school's name here! (Required)  =>:",
        when: (userInput) => userInput.role === "Intern",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log(
              "To proceed, the entern's school's name must be provided"
            );
          }
        },
      },

      {
        type: "confirm",
        name: "confirmAddingEmployee",
        message: "Would you like to add employee?",
        default: false,
      },
    ])
    .then((userInputData) => {
      // Creating object based on role type

      let { name, id, email, role, github, school, confirmAddingEmployee } =
        userInputData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }
      employeeArray.push(employee);

      if (confirmAddingEmployee) {
        return addEmployee(employeeArray);
      } else {
        return employeeArray;
      }
    });
};

// A function that generates HTML pages from file system files
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // If there is any error
    if (err) {
      console.log(err);
      return;
    }
    // If the profile is successfully generated
    else {
      console.log(
        "Profiles have been successfully generated. Please check the index.html file in the destination folder!"
      );
    }
  });
};

addManager()
  .then(addEmployee)
  .then((employeeArray) => {
    return generateHTML(employeeArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
