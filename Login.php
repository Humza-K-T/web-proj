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
    $systolicBloodPressure=$_POST['systolicBloodPressure'];
    $diastolicBloodPressure=$_POST['diastolicBloodPressure'];
    $kidneyDisease=$_POST['kidneyDisease'];
    $familyHistory=$_POST['familyHistory'];
    $date = date('Y-m-d H:i:s');

    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql = "INSERT INTO patientprofile (patientName, gender, DateOfBirth, height, weight, dateOfRegistration, SBP, DBP, RGLevel, FGLevel, smoker, alcoholic, familyHeartHistory, kidneyIssue)
    VALUES ('$name', '$gender', '$dateOfBirth', $height, $weight, '$date', $systolicBloodPressure,$diastolicBloodPressure, $randomGluLevel, $fastingGluLevel, '$smoker', '$alcohlic', '$familyHistory' ,'$kidneyDisease');";
      
    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
        
?>