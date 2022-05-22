<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "SELECT * FROM userlogin";
    $result1 = $conn->query($sql1);

    if ($result1->num_rows > 0) {
        while ($row1 = $result1->fetch_assoc()) {
            $username = $row1["userLoginName"];
            $password = $row1["password"];

            echo "Username: " . $username . " Password: " . $password . "<br>";
    
    
    if(empty($username) ){
        echo "Username is required";
    }
    else if(empty($password)){
        echo "Password is required";
    }
    
}
    }
    
    
?>
