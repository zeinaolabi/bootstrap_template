//Bind the table
var table = document.getElementById("messages_table");
const showMessagesAPI = "http://localhost/bootstrap_template/backend/get_message.php"

//Get the data from the database
fetch(showMessagesAPI)
.then(response=>response.json())
.then(data => {
    for(var i = 0; i < data.length; i++){
        //Create an empty
        var row = table.insertRow(i);

        //insert cells
        let name_row = row.insertCell(0);
        let phone_row = row.insertCell(1);
        let email_row = row.insertCell(2);
        let message_row = row.insertCell(3);

        //Add some text to the new cell
        name_row.innerHTML = data[i].full_name;
        phone_row.innerHTML = data[i].phone_number;
        email_row.innerHTML = data[i].email;
        message_row.innerHTML = data[i].message;
    }
})