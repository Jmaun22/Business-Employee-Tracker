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
                addEmployee();
                
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
            name: "employeeID",
            message: "What is the employee id?",

        },

        {
            type: "input",
            name: "employeeFirstName",
            message: "What is your employees firstname?",

        },
        {
            type: "input",
            name: "emplyoeeLastName",
            message: "What is your employees lastname?",

        },
        {
            type: "input",
            name: "employeeRoleId",
            message: "What is your employees roleId?",

        },
        {
            type: "input",
            name: "employeeManagerId",
            message: "What is your employees manager_id",

        }
    ]).then((results) => {
        console.log(results);
        console.log(typeof results.employeeID, typeof results.employeeFirstName, typeof results.emplyoeeLastName, typeof results.employeeRoleId, typeof results.employeeManagerId);
        const sql = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
        VALUES (?, ?, ?, ?, ?)`;
      const params = [Number(results.employeeID), results.employeeFirstName, results.emplyoeeLastName, Number(results.employeeRoleId), Number(results.employeeManagerId)];
      
      db.query(sql, params, (err, result) => {

          console.log(results);
          mainMenu();
        })
    });
}

// 
// USE business_db;
// INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
// VALUES (8, "Jesse", "Maun", 2, 3)










