const express = require('express');
const app = express();

const mysql = require('mysql2');

const { sequelize, HRA_App } = require("./models/db"); // Import sequelize from the db module

const taskController = require("./controllers/taskController");

//to connect the frontend with the backend server we use "cors" module to Remove " cross origin error "

const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors());



// Step 1: Add the "POST /hra" route
app.post("/hra", taskController.CreateHra);




//server connection

const port = 8000;

app.listen(port, () => console.log(`server connected successfully!!${port}`));