// Writing a Failing Test for Engineer Object Creation

// Importing the Employee function from which the Engineer class inherits its behavior and properties
const Engineer = require("../lib/Engineer");

// This is a test of a method that returns the Engineer object
test("gets the Engineer object", () => {
  // creating new engineer object
  const engineer = new Engineer(
    "Abyou",
    1111,
    "abyou@gmail.com",
    "anyougithub"
  );

  // Expected
  expect(engineer.github).toEqual(expect.any(String));
});

// This is a test of a method that returns the Engineer's github from getGihub()
test("gets the Engineer's github", () => {
  // creating new engineer object
  const engineer = new Engineer(
    "Abyou",
    1111,
    "abyou@gmail.com",
    "anyougithub"
  );

  // Expect
  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// This is a test of a method that returns the Engineer's role from getRole()
test("gets the engineer's role", () => {
  // creating new engineer object
  const engineer = new Engineer(
    "Abyou",
    1111,
    "abyou@gmail.com",
    "anyougithub"
  );

  // Expected
  expect(engineer.getRole()).toEqual("Engineer");
});
