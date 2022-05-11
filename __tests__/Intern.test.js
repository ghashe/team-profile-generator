// Writing a failing test for Intern object creation

// Importing the Inter object
const Intern = require("../lib/Intern");

// This is a test of a method that returns the Intern object
test("creates an Intern object", () => {
  // creating new intern object
  const intern = new Intern("Abyou", 1111, "abyou@gmail.com", "UMN");

  // Expected
  expect(intern.school).toEqual(expect.any(String));
});

// This is a test of a method that returns the intern's school from getSchool()
test("gets Intern's school", () => {
  const intern = new Intern("Abyou", 1111, "abyou@gmail.com", "UMN");

  // Expected
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// This is a test of a method that returns the Intern's role from getRole()
test("get Intern's role", () => {
  const intern = new Intern("Abyou", 1111, "abyou@gmail.com", "UMN");

  // Expected
  expect(intern.getRole()).toEqual("Intern");
});
