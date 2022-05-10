// Write a Failing Test for Employee Object Creation

/*  Importing Employee function which is assumed to be created in future 
    to be tested from the Employee.js file to our test file*/
const Manager = require("../lib/Manager");

// Testing a function that creates an object called Manager
test("creats a Manager object", () => {
  // creating new manager
  const manager = new Manager("Abyou", 1111, "abyou@gmail.com", 1);

  // expected
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// This is a test of a method that returns the Manager's role (getRole())
test("gets the role of the Manager", () => {
  const manager = new Manager();

  // Ecpected
  expect(manager.getRole()).toEqual("Manager");
});
