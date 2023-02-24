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
            name:"isManager",
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

function questionForManager(){
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
    ]).then((answers)=>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);  
        teamMember.push(manager);
        isAddRole();
        console.log(teamMember);
        
    })
}

function questionsForEngineer(){
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
        }]).then((answers)=> {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamMember.push(engineer);
            console.log(teamMember);
        })
    };

function questionsForIntern(){
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
        }]).then((answers)=> {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamMember.push(intern);
            console.log(teamMember);
        }) 
}
function isAddRole(){
    
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to add a role?",
            name: "isAddRole",
            default:"false",
        }
    ]).then((answers) => {
        if (answers.isAddRole){
            whichRole();
            
        } else {
            console.log("Exiting Application as no role will be added.")
        }
    })
   
}

const whichRole = ()=> {
    inquirer.prompt([{
        type:'list',
        name:'typeRole',
        message: 'Which role would you like to add?',
        choices: ['Engineer', 'Intern']
    }]).then((answers) => {
        if(answers.typeRole === 'Engineer'){
            questionsForEngineer()
        } else {
            questionsForIntern()
        };
    })

}






// const engineer = new Engineer("jun123", "10", "email@test.com", "zzangu0215");
// const intern = new Intern("jun456", "11", "email@test.com", "UCSD");
// teamMember.push(engineer, intern);


// function test() { 

//     const cardsArray = [];

//     for (let i=0; i<teamMember.length; i++) {
//         const memberCard = `
//             <div>
//                 <h1>Role: ${teamMember[i].role}</h1>
//                 <h2 style="color: ${teamMember[i].role === 'Manager' ? 'red' : 
//                 teamMember[i].role === 'Engineer' ? 'green' : 'purple'}">Name: ${teamMember[i].name}</h2>
//                 <h3>ID: ${teamMember[i].id}</h3>
//             </div>\n
//         `;
//         cardsArray.push(memberCard);
//     }
    
//     const htmlDivs = cardsArray.join("");

//     console.log(htmlDivs);
// }

isManager();
// const generateHTML = () => {}
