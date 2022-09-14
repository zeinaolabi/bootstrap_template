<?php
include("connection.php");
require_once("headers.php");

$query = $mysqli->prepare("SELECT * FROM messages");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>