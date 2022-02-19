const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

// questions for user input
const options = () => {
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
        const { options } = answer;
        if (options === 'View All Departments') {
            viewDepartments();
        }
        if (options === 'View All Jobs') {
            viewJobs();
        }
        if (options === 'View All Employees') {
            viewEmployees();
        }
        if (options === 'Add a Department') {
            addDepartment();
        }
        if (options === 'Add a Job') {
            addJob();
        }
        if (options === 'Add an Employee') {
            addEmployee();
        }
        if (options === 'Update an Employee Job') {
            updateEmployee();
        }
        if (options === 'Exit') {
            exitTracker();
        }
    });
};

viewDepartments = () => {
    console.log('Showing all departments');
    const sql = `SELECT * FROM departments`

    connection.promise().query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
        options();
    });
};
