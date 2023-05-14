//Index is the directory and will be the entry point for the application
const fs = require("fs");
const inquirer = require("inquirer");

//importing classes for the application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

//importing the html template
const generateHTML = require("./src/generateHTML");

//array to store employees
const Managers = [];
const Engineers = [];
const Interns = [];

//questions for the user
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the manager?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of the manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the manager?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the ID of the manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the manager?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the email of manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the office number of the manager?",
    validate: (officeNumberInput) => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log("Please enter the office number of the manager!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add an employee?",
    choices: ["Yes", "No"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the engineer?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of the engineer!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the engineer?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the ID of the engineer!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the engineer?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the email of the engineer!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the github username of the engineer?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the github username of the engineer!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add an employee?",
    choices: ["Yes", "No"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the intern?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of the intern!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the ID of the intern?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the ID of the intern!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email of the intern?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter the email of the intern!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What is the school of the intern?",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter the school of the intern!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "addEmployee",
    message: "Would you like to add an employee?",
    choices: ["Yes", "No"],
  },
];

//function to generate the html file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("HTML file created!");
  });
}

//function which will write the html file
function init() {
  inquirer.prompt(managerQuestions).then((managerData) => {
    const manager = new Manager(
      managerData.name,
      managerData.id,
      managerData.email,
      managerData.officeNumber
    );
    Managers.push(manager);
    if (managerData.addEmployee === "Yes") {
      addEmployee();
    } else {
      const html = generateHTML(Managers, Engineers, Interns);
      writeToFile("./dist/index.html", html);
    }
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the role of the employee?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((roleData) => {
      if (roleData.role === "Engineer") {
        inquirer.prompt(engineerQuestions).then((engineerData) => {
          const engineer = new Engineer(
            engineerData.name,
            engineerData.id,
            engineerData.email,
            engineerData.github
          );
          Engineers.push(engineer);
          if (engineerData.addEmployee === "Yes") {
            addEmployee();
          } else {
            const html = generateHTML(Managers, Engineers, Interns);
            writeToFile("./dist/index.html", html);
          }
        });
      } else {
        inquirer.prompt(internQuestions).then((internData) => {
          const intern = new Intern(
            internData.name,
            internData.id,
            internData.email,
            internData.school
          );
          Interns.push(intern);
          if (internData.addEmployee === "Yes") {
            addEmployee();
          } else {
            const html = generateHTML(Managers, Engineers, Interns);
            writeToFile("./dist/index.html", html);
            console.log("HTML file created!");
          }
        });
      }
    });
}

init();
console.log("Welcome to the Team Profile Generator!");
