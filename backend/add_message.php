<?php
include("connection.php");
require_once("headers.php");

$fullName = $_POST["full_name"];
$email = $_POST["email"];
$phoneNumber = $_POST["phone_number"];
$message = $_POST["message"];

$query = $mysqli->prepare("INSERT INTO messages(full_name, email, phone_number, message) VALUES  (?, ?, ?, ?)");
$query->bind_param("ssss", $fullName, $email, $phoneNumber, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
?>