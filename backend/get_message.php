<?php
include("connection.php");
require_once("headers.php");

//Get variables
$query = $mysqli->prepare("SELECT * FROM messages");
$query->execute();
$array = $query->get_result();

$response = [];

//Save results in response array
while($a = $array->fetch_assoc()){
    $response[] = $a;
}

//return a JSON object
$json = json_encode($response);
echo $json;

?>