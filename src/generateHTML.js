// A Manager card will be generated when this function is called
const createManager = function (manager) {
  return `
  <section class="col-4 mt-4">
  <div class="card h-100">
    <div class="card-header">
      <h3>${manager.name}</h3>
      <h4>Manager</h4>
      <i class="fas fa-mug-hot fa-2x"></i>
    </div>

    <div class="card-body">
      <p class="id">ID: ${manager.id}</p>
      <p class="email">
        Email: <a href="mailto:${manager.email}">${manager.email}</a>
      </p>
      <p class="office">Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
</section>
    `;
};
// An Engineer card will be generated when this function is called
const createEngineer = function (engineer) {
  return `
  <section class="col-4 mt-4">
  <div class="card h-100">
    <div class="card-header">
      <h3>${engineer.name}</h3>
      <h4>Engineer</h4>
      <i class="fas fa-glasses fa-2x"></i>
    </div>

    <div class="card-body">
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">
        Email:
        <a href="mailto:${engineer.email}">${engineer.email}</a>
      </p>
      <p class="github">
        Github:
        <a
          href="https://github.com/${engineer.github} "
          target="_blank"
          >${engineer.github}</a
        >
      </p>
    </div>
  </div>
  </section>
      `;
};

// An Intern card will be generated when this function is called
const createIntern = function (intern) {
  return `
  <section class="col-4 mt-4">
  <div class="card h-100">
    <div class="card-header">
      <h3>${intern.name}</h3>
      <h4>Engineer</h4>
      <i class="fas fa-user-graduate fa-2x"></i>
    </div>

    <div class="card-body">
      <p class="id">ID: ${intern.id}</p>
      <p class="email">
        Email: <a href="mailto:${intern.email}">${intern.email}</a>
      </p>
      <p class="school">School: ${intern.school}</p>
    </div>
  </div>
</section>
        `;
};

// adds user input to the end of an array
generateHTML = (data) => {
  // Array displayed in Cards
  htmlArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // Making the Manager page
    if (role === "Manager") {
      const managerPage = createManager(employee);

      htmlArray.push(managerPage);
    }

    // Making the Engineer page
    if (role === "Engineer") {
      const engineerPage = createEngineer(employee);

      htmlArray.push(engineerPage);
    }

    // Making the Intern page
    if (role === "Intern") {
      const internPage = createIntern(employee);

      htmlArray.push(internPage);
    }
  }

  // This will joins strings together
  const employeePages = htmlArray.join("");

  // This will return to the generated page
  const createTeam = createTeamPage(employeePages);
  return createTeam;
};

// This will generate The HTML page
const createTeamPage = function (employeePages) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeePages}
                </div>
            </div>
        </main>

        
    </body>
    <footer>
    <ul id="contacts" class="social-media-icons">
      <li>
        <a
          href="mailto:emandaabyou@gmail.com?subject=Mail from Our Site"
          target="_blank"
          rel="My email address"
          ><ion-icon name="mail-outline"></ion-icon
        ></a>
        <a
          href="https://www.linkedin.com/in/abyou-geletu-5ba16622b"
          target="_blank"
          rel="My Linkedin Account"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/abyou.jiru/"
          target="_blank"
          rel="My Facebook Account"
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/AbyouJiru"
          target="_blank"
          rel="My Twitter Account"
        >
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ins_abyou/"
          target="_blank"
          rel="My Instagram Account"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
      </li>
    </ul>
    <ul class="menu-cont">
      <li><a href="#" rel="Home Page">Home</a></li>
      <li><a href="#about" rel="About">About</a></li>
      <li><a href="#" rel="#">Terms</a></li>
      <li><a href="#contacts" rel="#">Contact</a></li>
    </ul>

    <a href="#" target="_blank" rel="Copy rights"
      >©2022 | All Rights Reserved
    </a>
  </footer>

  <script
    type="module"
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
  ></script>
  <script
    nomodule
    src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
  ></script>

  <script
    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
  ></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin="anonymous"
  ></script>
  
  `;
};

// export to index
module.exports = generateHTML;
