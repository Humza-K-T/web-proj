<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $name=$_POST['name'];
    $dateOfBirth=$_POST['dateOfBirth'];
    $contactNo=$_POST['contactNo'];
    $height=$_POST['height'];
    $gender=$_POST['gender'];
    $weight=$_POST['weight'];
    $hospitalId=$_POST['hospitalId'];
    $randomGluLevel=$_POST['randomGluLevel'];
    $fastingGluLevel=$_POST['fastingGluLevel'];
    $alcohlic=$_POST['alcohlic'];
    $smoker=$_POST['smoker'];
    $systolicBloodPressure=$_POST[''];
    $diastolicBloodPressure=$_POST[''];
    $kidneyDisease=$_POST['kidneyDisease'];
    $familyHistory=$_POST['familyHistory'];

    
    
    echo ("Hello from server: ");
    echo ("Name: " . $name);
    echo ("Date of Birth: " . $dateOfBirth);
    echo ("Contact No: " . $contactNo);
    echo ("Height: " . $height);
    echo ("gender: ".  $gender);
    echo ("alcoholic" . $alcohlic);
    
    
?>