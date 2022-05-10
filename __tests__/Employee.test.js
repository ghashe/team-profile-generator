// Write a Failing Test for Employee Object Creation

/*  requiring Employee Object. It's not necessary to include 
    the .js file extension. Node will assume that the file 
    is a JS file if no extension is specified.*/
const Employee = require("../lib/Employee");

// Testing employee object creation
test("creates an employee object", () => {
  // creating new emplotee
  const employee = new Employee("Abyou", 1111, "abyou@gmail.com");

  // expected
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// This method returns the employe name
test("gets employee name", () => {
  // Creating a new employee object
  const employee = new Employee("Abyou", 1111, "abyou@gmail.com");

  // Expected
  expect(employee.getName()).toEqual(expect.any(String));
});

// This method returns the employee id
test("gets employee id", () => {
  // Creating a new employee object
  const employee = new Employee("Abyou", 1111, "abyou@gmail.com");

  // Expected
  expect(employee.getId()).toEqual(expect.any(Number));
});

// This method returns the employee email
test("gets employee email", () => {
  // Creating a new employee object
  const employee = new Employee("Abyou", 1111, "abyou@gmail.com");

  // Expected
  expect(employee.getEmail()).toEqual(expect.any(String));
});

// This method returns the employee role
test("gets employee role", () => {
  // Creating a new employee object
  const employee = new Employee("Abyou", 1111, "abyou@gmail.com");

  // Expected
  expect(employee.getRole()).toEqual("Employee");
});
