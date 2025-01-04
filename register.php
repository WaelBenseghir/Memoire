<?php

include 'connect.php';


if(isset($_POST['signUp'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $checkEmail = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($checkEmail);
    if($result->num_rows>0){
        echo "Email Address Already Exists! ";
    }
    else{
        $insertQuery = "INSERT INTO user(name, email, password)
                        VALUES ('$name', '$email', '$hashed_password')";
            if($conn->query($insertQuery)==TRUE){
                header("location:home.php");
            }
            else{
                echo "Error:".$conn->error;
            }
    }
}

if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM user WHERE email='$email'";
    $result = $conn->query($sql);
    
    if($result->num_rows>0){
        $row = $result->fetch_assoc();

        if(password_verify($password, $row['password'])){
            session_start();
            $row = $result->fetch_assoc();
            $_SESSION['email'] = $row['email'];
            header("location:home.php");
            exit();
        } 
        else{
        echo "Incorrect Email or Password";
    }
    }
    
}
?>