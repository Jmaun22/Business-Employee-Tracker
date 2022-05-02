const inquirer = require('inquirer');
// const db = require("./db");

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

    })

}


mainMenu();

// conditional statment here call corresonding function
// async function viewEmployees() 

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
        })
        .then(() => mainMenu());
}


function quit() {
    console.log("Goodbye!");
    process.exit();
};




