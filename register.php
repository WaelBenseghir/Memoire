<?php

include 'connect.php';


if(isset($_POST['signUp'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $checkEmail = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already Exists! ";
    }
    else{
        $insertQuery = "INSERT INTO user(name, email, password)
                        VALUES ('$name', '$email', '$password')";
            if($conn->query($insertQuery)==TRUE){
                header("location:index.php");
            }
            else{
                echo "Error:".$conn->error;
            }
    }
}

if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE email='$email' and password='$password'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row = $result->fetch_assoc();
        $_SESSION['email'] = $row['email'];
        header("location:index.php");
        exit();
    }
    else{
        echo "Incorrect Email or Password";
    }
}
?>