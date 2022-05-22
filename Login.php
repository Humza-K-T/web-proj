<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');

    
    
    
    if(empty($user) ){
        echo "Username is Required";
    }
    else if(empty($pass)){
        echo "Password is required";
    }
    else{

        $user=$_POST["username"];
    $pass=$_POST["password"];
    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "SELECT * FROM userlogin";
    $result1 = $conn->query($sql1);

    if ($result1->num_rows > 0) {
        while ($row1 = $result1->fetch_assoc()) {
            $username = $row1["userLoginName"];
            $password = $row1["password"];

           // echo "Username: " . $username . " Password: " . $password . "<br>";

        }
    }


    if( $user ===$username && $pass = $password){
        echo "Welcome";
    }
    else{
        echo "Invalid Username or Password";
    }

    }
    
    
    
?>