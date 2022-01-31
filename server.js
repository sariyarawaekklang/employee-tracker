const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

// questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Jobs',
            'View All Employees',
            'Add a Department',
            'Add a Job',
            'Add an Employee',
            'Update an Employee Job',
            'Exit'
        ]
    }
    ])
    .then((answer) => {
        const { questions } = answer;
        if (questions === 'View All Departments') {

        }
        if (questions === 'View All Jobs') {

        }
        if (questions === 'View All Employees') {

        }
        if (questions === 'Add a Department') {

        }
        if (questions === 'Add a Job') {

        }
        if (questions === 'Add an Employee') {

        }
        if (questions === 'Update an Employee Job') {

        }
        if (questions === 'Exit') {
            console.log('Thank you for using Employee Tracker!');
        }
    });
};

questions();
