//Initialize variables
let username = document.getElementById("fullname").value;
let phoneNumber = document.getElementById("phone_number").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let error = document.getElementById("error").value;
let submitButton = document.getElementById("submit");

function validateName(){
    if(typeof username !== "string" || /[^A-Za-z]+/g.test(username) || username == ""){
        error.textContent="Error: Invalid username"
    }
    else if(username.trim().length() < 5){
        error.textContent="Error: Name should have a minimum of 5 characters"
    }
}

function validateEmail(){
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || 
    email.substring(0,email.indexOf("@")).length < 3 ||
    email.substring(email.indexOf("@") + 1,email.length).length < 5
    ){
        error.textContent="Error: Invalid email";
    }
}