//first step is to link/require/invoke all the files
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMember = [];
const isManager = () => {
    inquirer.prompt([
        {
            type: "confirm",
            name: "isManager",
            message: "this app should only be used by a manager, are you a manager?",
            default: false
        }
    ]).then((answers) => {
        if (answers.isManager) {
            questionForManager()
        } else {
            console.log('Unauthorized User. Exiting application')
        }
    })
};

function questionForManager() {
    inquirer.prompt([
        {
            type: "input",
            message: 'What is your Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'what is your assigned ID?',
            name: 'id',
            //how should I add a validation here?
        },
        {
            type: 'input',
            message: 'what is your email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'what is your assigned ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'what is your office number?',
            name: 'officeNumber',
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMember.push(manager);
        isAddRole();
        console.log(teamMember);
       
    })
}

function questionsForEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: `What is the engineer's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the engineer's ID?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the engineer's email address?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the engineer's github username?`,
            name: 'github',
        }]).then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMember.push(engineer);
            isAddRole()
            console.log(teamMember);
        })
};

function questionsForIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: `What is the intern's name?`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the intern's ID?`,
            name: 'id',
        },
        {
            type: 'input',
            message: `What is the intern's email address?`,
            name: 'email',
        },
        {
            type: 'input',
            message: `What is the intern's school?`,
            name: 'school',
        }]).then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMember.push(intern);
            isAddRole()
            console.log(teamMember);
        })
}
function isAddRole() {

    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to add a role?",
            name: "isAddRole",
            default: "false",
        }
    ]).then((answers) => {
        if (answers.isAddRole) {
            whichRole();

        } else {
            console.log("Exiting Application")
            employeeCards();
        }
    })

}

const whichRole = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'typeRole',
        message: 'Which role would you like to add?',
        choices: ['Engineer', 'Intern']
    }]).then((answers) => {
        if (answers.typeRole === 'Engineer') {
            questionsForEngineer()
        } else {
            questionsForIntern()
        };
    })

}

function employeeCards() {

    const cardsArray = [];
    //I declared an array globally (teamMember) to store all added roles after each prompt, then here, the for loop will access the array and create a card for each
    //role at the end of each loop as memberCard string. The memberCard will be pushed to cardsArray.
    for (let i = 0; i < teamMember.length; i++) {
        const member = teamMember[i];
        let memberCard = "";
        if (member.role === 'Manager'){

            memberCard = `
            <div class="col">
                <div class="col h-100 cardInnerDiv">
                   <div class="card h-100 w-75 p-5 cardBody">
                        <h3 class="card-text">Name: ${member.name}</h3>
                        <h5 class="card-title">${member.role}</h5>
                        <h5 class="card-text">ID: ${member.id}</h5>
                        <h5 class="card-text">Email: <a href="mailto:${member.email}">${member.email}</a></h5>
                        <h5 class="card-text">Office Number: ${member.officeNumber}</h5>
                    </div>
                </div>
            </div>\n
            `;
        } else if (member.role === "Engineer") {
            memberCard = `
                <div class="col">
                    <div class="col h-100 cardInnerDiv">
                       <div class="card h-100 w-75 p-5 cardBody">
                            <h3 class="card-text">Name: ${member.name}</h3>
                            <h5 class="card-title">${member.role}</h5>
                            <h5 class="card-text">ID: ${member.id}</h5>
                            <h5 class="card-text">Email: <a href="mailto:${member.email}">${member.email}</a></h5>
                            <h5 class="card-text">
                                <a href="https://github.com/${member.github}"><button style="font-size:24px">GitHub<i class="fa fa-github"></i></button></a>   
                            </h5>       
                        </div>
                    </div>
                </div>\n
            `;
        } else if (member.role === "Intern") {
            memberCard = `
                <div class="col">
                    <div class="col h-100 cardInnerDiv">
                       <div class="card h-100 w-75 p-5 cardBody">
                            <h3 class="card-text">Name: ${member.name}</h3>
                            <h5 class="card-title">${member.role}</h5>
                            <h5 class="card-text">ID: ${member.id}</h5>
                            <h5 class="card-text">Email: <a href="mailto:${member.email}">${member.email}</a></h5>
                            <h5 class="card-text">School: ${member.school}</h5>
                        </div>
                    </div>
                </div>\n
            `;
        }

        cardsArray.push(memberCard);
    }
    //here I joined all the cardsArray into a integrated html chunk.
    const htmlDivs = cardsArray.join("");
    //I have some preset html elements here then the htmlDivs will be insert into it.
    const htmlPage = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team File Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/asset/style.css">
      </head>
      <body>
        <header class="header">
        <h1 class="header-h1">My Team</h1>
        </header>
        <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center mt-1">
        ${htmlDivs}
        </div>
      </body>
    </html>`

    fs.writeFile(`test.html`, htmlPage, (err) => {
        err ? console.log(err) : console.log('Webpage has been generated!')
    })
}

const init = () => isManager();

init();


