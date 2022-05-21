<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "SELECT * FROM userlogin";
    $result1 = $conn->query($sql1);

    if ($result1->num_rows > 0) {
        echo "<table><tr><th>Name</th><th>Email</th><th>Job Title</th><th>Emp Office Address</th><th>Reports To</th><th>Update</th></tr>";
        while ($row1 = $result1->fetch_assoc()) {
            $office = $row1["officeCode"];
            $reports = $row1["reportsTo"];

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
