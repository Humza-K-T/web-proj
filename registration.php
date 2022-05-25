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

    



    $conn = new mysqli("localhost", "root", "", "obesity_silo");
    $sql1 = "INSERT INTO patientprofile (patientName, gender, DateOfBirth, height, weight, SBP, DBP, RGLevel, FGLevel, smoker, alcoholic, familyHeartHistory, kidneyIssue)
    VALUES ('$name', '$gender',  '$dateOfBirth', '$height','$weight','$systolicBloodPressure','$diastolicBloodPressure' ,'$randomGluLevel','$fastingGluLevel','$smoker','$alcohlic', '$familyHistory','$kidneyDisease');";
    
    $result1 = $conn->query($sql1);

    if ($result1!=Null) {
      echo " Record Successful";

        }
        else{
            echo "Unsuccessful";
        }
    
    
    
    
?>