// TODO: Include packages needed for this application

const markdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = ['What is your GitHub username?', 'What is your email address?', "What is your project's name?", 'Please enter a short description of your project.', 'What kind of license should your project have?', 'What command should be run to install dependencies?', 'What command should be run to run tests?', 'What does the user need to know about using the repo?', 'What does the user need to know about contributing to the repo?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'project',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3]
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'install',
            message: questions[5],
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'contribute',
            message: questions[8]
        },
    ])
    .then((data) => console.log(data))
    }


// Function call to initialize app
init();
