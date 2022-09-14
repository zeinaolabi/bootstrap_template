<?php
include("connection.php");
require_once("headers.php");

//Get variables
$fullName = $_POST["full_name"];
$email = $_POST["email"];
$phoneNumber = $_POST["phone_number"];
$message = $_POST["message"];

//Prepare and excute query
$query = $mysqli->prepare("INSERT INTO messages(full_name, email, phone_number, message) VALUES  (?, ?, ?, ?)");
var_dump($query);
$query->bind_param("ssss", $fullName, $email, $phoneNumber, $message);
$query->execute();

//Return true if the query was successful
$response = [];
$response["success"] = true;

echo json_encode($response);
?>