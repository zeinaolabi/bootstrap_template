//Initialize variables
const username = document.getElementById("fullname");
const phoneNumber = document.getElementById("phone_number");
const email = document.getElementById("email");
const message = document.getElementById("message");
const error = document.getElementById("error");
const submitButton = document.getElementById("submit");
const addMessageAPI = "http://localhost/bootstrap_template/backend/add_message.php";
const showMessagesAPI = "http://localhost/bootstrap_template/backend/get_message.php"

//When the button is clicked, validate input
submitButton.addEventListener("click", (event)=>{
    //If one of the functions return false, stop
    if(!validateName() || !validateEmail() || !validatePhoneNumber() || !validateMessage()){
        return
    }

    //Send the data to the database using POST method
    fetch(addMessageAPI, {
        method: 'POST',
        body: new URLSearchParams({ "full_name": username.value,
        "phone_number": phoneNumber.value,
        "email": email.value,
        "message": message.value}),
    })
    .then(response=>response.json())
    .then(data => error.textContent = data.success)
})

function validateName(){
    //Check if the name is a string and has more than 5 characters
    if(username.value == ""){
        error.textContent="Error: Missing field" 
        return false
    }
    else if(typeof username.value !== "string"){
        error.textContent="Error: Invalid name";
        return false
    }
    else if(username.value.trim().length < 5){
        error.textContent="Error: Name should have a minimum of 5 characters";
        return false
    }
    return true
}

function validateEmail(){
    //Check if the email is valid and has 3 characters after the @ and 5 after
    if(email.value == ""){
        error.textContent="Error: Missing field" 
        return false
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) || 
    email.value.substring(0,email.value.indexOf("@")).length < 3 ||
    email.value.substring(email.value.indexOf("@") + 1,email.value.length).length < 5){
        error.textContent="Error: Invalid email";
        return false
    }
    return true
}

function validatePhoneNumber(){
    //Check if the phone number is valid by comparing the country code and the length of the phone number
    if(phoneNumber.value == ""){
        error.textContent="Error: Missing field" 
        return false
    }
    else if(phoneNumber.value.substring(0,3) != "961"){
        error.textContent="Error: Invalid country code"
        return false
    }
    else if((phoneNumber.value.substring(3, phoneNumber.value.length) == 7 && phoneNumber.value[4] != "3") ||
    (phoneNumber.value.substring(3, phoneNumber.value.length) == 8 && (phoneNumber.value.substring(4,6) != "71" || phoneNumber.value.substring(4,6) != "76" || phoneNumber.value.substring(4,6) != "70"))){
        error.textContent="Error: Invalid phone number"
        return false
    }
    else if(phoneNumber.value.substring(3, phoneNumber.value.length).length > 8 || 
    phoneNumber.value.substring(3, phoneNumber.value.length).length < 7){
        error.textContent="Error: Phone number should be 7 or 8 digits"
        return false
    }
    return true
}

function validateMessage(){
    //Check if the message has at least 100 characters
    if(message.value.trim().length < 100){
        error.textContent="Error: Minimum message is 100 characters"
        return false
    }
    return true
}