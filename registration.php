<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $id =1;
    $MRNO=1000;

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

    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "INSERT INTO patientprofile (patientId, patientMRNO, patientName, gender, DateOfBirth, height, weight, SBP, DBP, RGLevel, FGLevel, smoker, alchoholic, familyHeartHistory, kidneyIssue)
    VALUES ($id,$MRNO, $name, $gender,  $dateOfBirth, $height,$weight,$systolicBloodPressure,$diastolicBloodPressure ,$randomGluLevel,$fastingGluLevel,$smoker,$alcohlic, $familyHistory,$kidneyDisease);";
    $result1 = $conn->query($sql1);

    if ($result1->num_rows >= 0) {
      echo "Successful";

        }
        else{
            echo "Unsuccessful";
        }
    
    
    
    
?>