<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');   


    $pID = $_POST['search'];
    
    $conn = new mysqli("localhost", "root", "", "obesity_silo");
    $sql1 = "Select Id, WBC, Haemoglobin, Platelet, creatinine,  eGFR, AST,ALT

    FROM patientclinincalrecord WHERE patientId = '$pID'";

    $result1 = $conn->query($sql1);

    if ($result1 != null) {
        while ($row1 = $result1->fetch_assoc()) {
                $jsn['dat'][]=array('WBC'=> $row1["WBC"],'Haemoglobin'=> $row1["Haemoglobin"], 'Platelet'=> $row1["Platelet"],'creatinine'=> $row1["creatinine"],'eGFR'=>$row1["eGFR"],'AST'=> $row1["AST"],'ALT'=> $row1["ALT"]);
        }
        $display= json_encode($jsn);
        echo $display;
    }
    else{
        echo "Patient not found";
    }
    