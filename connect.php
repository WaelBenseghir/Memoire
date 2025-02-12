<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "memoire";

$conn = new mysqli($host, $user, $password, $db);

if($conn->connect_error){
    echo "Failed to connect DB".$conn->connect_error;
}


?>