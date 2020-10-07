const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile);

// array of questions to generate readme file
const questions = [
    {
        message: "What is your project title?",
        name: "title",
        type: "input"
    },
    {
        message: "Please enter project description:",
        name: "description",
        type: "input"
    },
    {
        message: "Provide installation instructions:",
        name: "installation",
        type: "input",
        default: "node index.js"
    },
    {
        message: "Please enter usage information:",
        name: "usage",
        type: "input"
    },
    {
        message: "Please mention any contributors and contribution guidelines:",
        name: "contribution",
        type: "input",
        default: "Contributor Covenant"
    },
    {
        message: "What command should be entered to run tests?",
        name: "test",
        type: "input",
        default: "npm run test"
    },
    {
        message: "Choose your license:",
        choices: ["MIT", "Apache 2.0", "GPL 2.0", "GPL 3.0", "Unlicense"],
        name: "license",
        type: "list"
    },
    {
        message: "GitHub username:",
        name: "username",
        type: "input"
    },
    {
        message: "Email address:",
        name: "email",
        type: "input"
    }
];


//function to run this app
async function init() {
    //get answers
    const answers = await inquirer.prompt(questions);

    // generate html
    const htmlString = generateMarkdown(answers);

    // save to file
    await writeAsync("README.md", htmlString);
}

// call the function to run this app
init();
