const inquirer = require('inquirer');
const db = require("./db/connection.js");
const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// require("console.table");



const mainMenu = () => { 
    inquirer
    .prompt([
        {

        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            // View Employees
              // View Departments
            {
                name: "View All Departments",
                value: "VIEW_DEPARTMENTS"
            },
             // ViewRoles
            {
                name: "View Roles",
                value: "VIEW_ROLES"

            },
        
            // ADD Emplyees
            {
                name: "Add Employees",
                value: "ADD_EMPLOYEES"

            },
              // ADD Department
            {
                name: "Add Department",
                value: "ADD_DEPARTMENT"
            },
                 // Update and employee role

            {
                name: "Update and employee role",
                value: "UPDATE_ROLE"

            },
          
       
            {
                name: "Quit",
                value: "QUIT"
            }
        ]
    }


    

    ]).then(res => {
        // now we call the appropriate function depending on what the user chooses
        // if or switch
        switch (res.choice) {
            case "VIEW_EMPLOYEES":
                console.log('switched')
                viewEmployees();
               
                
                break;
            case "VIEW_DEPARTMENTS":
                ViewDepartments();

         
                
                 break;
            case "VIEW_ROLES":

                ViewRoles();
                
                break;
            case "ADD_EMPLOYEES":
                
                break;
            case "ADD_DEPARTMENT":
                
                break;
            case "UPDATE_ROLE":
                
                 break;
            case "QUIT":
                quit();
                
                 break;
        
            default:
                console.log("yo")
                console.log(res.choice)
                break;
        }

    })

}


mainMenu();

// conditional statment here call corresonding function
// async function viewEmployees() 

function viewEmployees() {
    const sql = `SELECT * FROM employee`;
    
    db.query(sql, function (err, results) {
        // console.table(results);
        console.table(results)
        mainMenu();
      
    });

};

// View departmnet function

function ViewDepartments() {

    const sql = `SELECT * FROM department`;

    db.query(sql, function (err, results) {
        console.table(results)
        mainMenu();
    })


};

// View Roles

function ViewRoles() {

    const sql = `SELECT * FROM role`;

    db.query(sql, function (err, results) {

        console.table(results)
        mainMenu();
    })

};


function quit() {
    console.log("Goodbye!");
    process.exit();
};

// add an employee function 

const addEmployee = () => {
    inquirer
    .prompt([
 
        {
            type: "input",
            name: "emploeeID",
            message: "What is the employee id?",

        },

        {
            type: "input",
            name: "emploeeFirstName",
            message: "What is your employees firstname?",

        },
        {
            type: "input",
            name: "emploeeLasttName",
            message: "What is your employees lastname?",

        },
        {
            type: "input",
            name: "emploeeRoleId",
            message: "What is your employees roleId?",

        },
        {
            type: "input",
            name: "emploeeManagerId",
            message: "What is your employees manager_id",

        }
    ]).then((results) => {
        const sql = `INSERT INTO employee (value, value)
        VALUES (?)`;
        db.query(sql, function (err, results) {

            console.table(results)
            mainMenu();
        })
    }


// 







