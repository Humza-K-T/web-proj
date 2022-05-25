<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $user=$_POST["username"];
    $pass=$_POST["password"];
    $message;

    // if(empty($user) ){
    //     $message= "Username is Required";
    //     goto end;
    // }
    // else if(empty($pass)){
    //     $message= "Password is required";
    //     goto end;
    // }

        
    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "SELECT * FROM userlogin";
    $result1 = $conn->query($sql1);

    if ($result1->num_rows >= 0) {
        while ($row1 = $result1->fetch_assoc()) {
            $username = $row1["userLoginName"];
            $password = $row1["password"];

            if( $user ==$username && $pass == $password){
                $message= $username;
                break;
            }
            else{
                $message= "1";
            }

        }
    }
    else{

        echo "2";

    }


    end:
    echo $message;
    
   

    
    
    
?>