// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter a title for your README file.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your application.'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please list installation instructions for your application.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please write a brief description of how to use your application.'
        },

        {
            type: 'input',
            name: 'contributions',
            message: 'Please list contribution guidelines for your project.'
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Please list test instructions for you project.'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please input your email.'
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please input your GitHub profile name.'
        },

        {
            type: 'list',
            name: 'license',
            message: 'Please select a license from the list below.',
            choices: ['MIT License','ISC License','Mozilla Public License 2.0 ','Eclipse Public License 1.0','Boost Software License 1.0']
        },    
    ]);
};

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((answers) => {
            content = generateMarkdown(answers)
            writeFile('./output/README.md', content)
        })
        .then(() => console.log("README successfully created"))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
