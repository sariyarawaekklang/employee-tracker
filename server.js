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
    console.log('Now showing all departments...');
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, res) => {
        if (err) throw err
        console.table(res);
        options();
    });
};

viewJobs = () => {
    console.log('Now showing all jobs...');
    const sql = `SELECT * FROM job`;

    db.query(sql, (err, res) => {
        if (err) throw err
        console.table(res);
        options();
    });
};

viewEmployees = () => {
    console.log('Now showing all employees...');
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, res) => {
        if (err) throw err
        console.table(res);
        options();
    });
};

addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: 'What is the department you would like to add?'
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (name) VALUES (?)`;

        db.query(sql, answer.addDepartment, (err, res) => {
            if (err) throw err;
            console.log(answer.addDepartment + ' has been added to deparments...');
            viewDepartments();
        });
    });
};

addJob = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the job you would like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of this job?'
        },
        {
            type: 'input',
            name: 'deptId',
            message: 'Please provide the department number of this job.'
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO job (title, salary, department_id) VALUES (?,?,?)`;
        const params = [answer.title, answer.salary, answer.deptId];

        db.query(sql, params, (err, res) => {
            if (err) throw err;
            console.log(answer.addJob + ' has been added to jobs...');
            viewJobs();
        });
    });
};

addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?"
        },
        {
            type: 'input',
            name: 'jobId',
            message: 'Please provide the job number for this employee.'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please provide a manager number for this employee.'
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?,?,?,?)`;
        const params = [answer.firstName, answer.lastName, answer.jobId, answer.managerId];

        db.query(sql, params, (err, res) => {
            if (err) throw err;
            console.log(answer.addEmployee + ' has been added to employees...');
            viewEmployees();
        });
    });
};

options();
