//Initialize variables
let username = document.getElementById("fullname").value;
let phoneNumber = document.getElementById("phone_number").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let error = document.getElementById("error").value;
let submitButton = document.getElementById("submit");

function validateName(username, error){
    if(typeof username !== "string" || /[^A-Za-z]+/g.test(username) || username == ""){
        error.textContent="Error: Invalid username"
    }
    else if(username.trim().length() < 5){
        error.textContent="Error: Name should have a minimum of 5 characters"
    }
}

function validateEmail(email, error){
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || 
    email.substring(0,email.indexOf("@")).length < 3 ||
    email.substring(email.indexOf("@") + 1,email.length).length < 5
    ){
        error.textContent="Error: Invalid email";
    }
}

function validatePhoneNumber(phoneNumber, error){
    if(phoneNumber.substring(0,3).length != "+961"){
        error.textContent="Error: Invalid country code"
    }
    else if(phoneNumber.substring(4, phoneNumber.length).length > 8 || 
    phoneNumber.substring(4, phoneNumber.length).length < 7){
        error.textContent="Error: Phone number should be 7 or 8 digits"
    }
    else if((phoneNumber.substring(4, phoneNumber.length) == 7 && phoneNumber[4] != "3") ||
    (phoneNumber.substring(4, phoneNumber.length) == 8 && (phoneNumber.substring(4,6) != "71" || phoneNumber.substring(4,6) != "76" || phoneNumber.substring(4,6) != "70")
    )){
        error.textContent="Error: Invalid phone number"
    }
}