const { Console } = require("console");

// Global variables
let todoList = [];
let doneList = [];
let currentUser = null;

// DOM elements
const welcomeContainer = document.getElementById("homePage");
const loginContainer = document.getElementById("login-container");
const createAccountContainer = document.getElementById("create-account-container");
const cancelLinkContainer = document.getElementById("cancel-link-container");
const todoContainer = document.getElementById("todo-container");
const todoListElement = document.getElementById("todo-list");
const doneListElement = document.getElementById("done-list");


const baseUrl = 'http://localhost:8383/'

document.addEventListener()
async function login(){

    const res = await fetch(baseUrl, 
        {
            method: 'GET'
        }) 

        console.log(res)
}

async function signup(){

}


// this is for the login popup 
    // Function to show the login container
    function showLogin() {
        // loginContainer.classList.add("active");
        window.location = "login.html";
	
    }
    
    // Function to hide the login container
    function hideLogin() {
        // loginContainer.classList.remove("active");
        window.location = "index.html";
    }
    
    // Show the login container when the user clicks the login button
    document.querySelector("#login-button").addEventListener("click", showLogin);
    
    // Hide the login container when the user clicks the cancel button
    document.querySelector("#cancel-link-container a").addEventListener("click", hideLogin);
    
    // Hide the login container when the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target == loginContainer) {
        loginContainer.classList.remove("active");
        }
    });
// 

// this is for the Create account popup 
    // Add an event listener to the Cancel link to hide the popup
    cancelLinkContainer.addEventListener("click", hideCreateAccount);

    // Function to show the popup
    function showCreateAccount() {
        // createAccountContainer.classList.add("active");
        window.location = "signup.html";
    }

    // Function to hide the popup
    function hideCreateAccount() {
        // createAccountContainer.classList.remove("active");
        window.location = "index.html";
    }

    // Add an event listener to the Create Account button to show the popup
    const createAccountButton = document.querySelector("#create-account-container button[type='submit']");
    createAccountButton.addEventListener("click", showCreateAccount);
// 