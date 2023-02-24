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






// const engineer = new Engineer("jun123", "10", "email@test.com", "zzangu0215");
// const intern = new Intern("jun456", "11", "email@test.com", "UCSD");
// teamMember.push(engineer, intern);


function employeeCards() {

    const cardsArray = [];

    for (let i = 0; i < teamMember.length; i++) {
        const member = teamMember[i];
        let memberCard = "";
        if (member.role === 'Manager'){

            memberCard = `
                <div>
                    <h1>Role: ${member.role}</h1>
                    <h2 style="color: ${member.role === 'Manager' ? 'red' :
                    member.role === 'Engineer' ? 'green' : 'purple'}">Name: ${member.name}</h2>
                    <h2>ID: ${member.id}</h2>
                    <h2>Email: ${member.email}</h2>
                    <h2>${member.role === 'Manager' ? 'Office Number' : member.role === 'Engineer' ? 'Github' : 'School'}</h2>
    
                </div>\n
            `;
        } else if (member.role === "Engineer") {
            memberCard = `
                <div>
                    <h1>Role: ${member.role}</h1>
                    <h2 style="color: ${member.role === 'Manager' ? 'red' :
                    member.role === 'Engineer' ? 'green' : 'purple'}">Name: ${member.name}</h2>
                    <h2>ID: ${member.id}</h2>
                    <h2>Email: ${member.email}</h2>
                    <h2>${member.role === 'Manager' ? 'Office Number' : member.role === 'Engineer' ? 'Github' : 'School'}</h2>
    
                </div>\n
            `;
        }else if (member.role === "Intern") {
            memberCard = `
                <div>
                    <h1>Role: ${member.role}</h1>
                    <h2 style="color: ${member.role === 'Manager' ? 'red' :
                    member.role === 'Engineer' ? 'green' : 'purple'}">Name: ${member.name}</h2>
                    <h2>ID: ${member.id}</h2>
                    <h2>Email: ${member.email}</h2>
                    <h2>${member.role === 'Manager' ? 'Office Number' : member.role === 'Engineer' ? 'Github' : 'School'}</h2>
    
                </div>\n
            `;
        }

        cardsArray.push(memberCard);
    }

    const htmlDivs = cardsArray.join("");
    
    const htmlPage = `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Team File Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet" href="/asset/style.css">
        </head>
        <body>
        ${htmlDivs}
        </body>
        </html>`

    fs.writeFile(`test.html`, htmlPage, (err) => {
        err ? console.log(err) : console.log('Webpage has been generated!')
    })
}

isManager();

