const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");


function mainMenu() {
    prompt([
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
            // ViewRoles
            // ADD Emplyees
            // ADD Department
            // Update and employee role
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




