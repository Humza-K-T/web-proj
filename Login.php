<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');

   $username=$_POST['username'];
    $password=$_POST['password'];
    
    
    
    if(empty($username) ){
        echo "Username is required";
    }
    else if(empty($password)){
        echo "Password is required";
    }
    else{
        echo "Success";
    }
    
    
?>
