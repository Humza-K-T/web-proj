<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');     

    $WBC=$_POST['RBC'];
    $Haemoglobin=$_POST['Haemoglobin'];
    $eGFR=$_POST['eGFR'];
    $ALT=$_POST['ALT'];
    $Platelet=$_POST['Platelet'];
    $Creatinine=$_POST['Creatinine'];
    $AST=$_POST['AST'];
    $ADL=$_POST['ADL'];
    $BUN=$_POST['BUN'];
    $Protein=$_POST['Protein'];
    $GGT=$_POST['GGT'];
    $Albumin=$_POST['Albumin'];
    $Triglyceride=$_POST['Triglyceride'];
    $Cholestrol=$_POST['Cholestrol'];
    $Neutrophil=$_POST['Neutrophil'];
    $Lymphocytes=$_POST['Lymphocytes'];
    $Eosinophils=$_POST['Eosinophils'];
    $UricAcid=$_POST['Uric Acid'];
    $Hematocritic=$_POST['Hematocritic'];
    $HbA1c=$_POST['HbA1c'];
    $LDL=$_POST['LDL'];
    $Basophils=$_POST['Basophils'];
    $RBC=$_POST['RBC'];
    $Bioimpedence=$_POST['Bioimpedence'];
    

    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "INSERT INTO patientclinicalrecord (WBC, Haemoglobin, eGFR, ALT, Platelet, creatinine, AST, BUN, DBP, Protein, GGT, Albumin, Triglyceride, Cholestrol, Segmented_Neutrophil,Lymphocytes, Eosinophils, Uric Acid, Hematocrit, HbA1c, LDL, Basophis, RBC, Bioimpedence)
    VALUES ( $WBC,
    $Haemoglobin,
    $eGFR,
    $ALT,
    $Platelet,
    $Creatinine,
    $AST,
    $BUN,
    $Protein,
    $GGT,
    $Albumin,
    $Triglyceride,
    $Cholestrol,
    $Neutrophil,    $Lymphocytes,
    $Eosinophils,
    $UricAcid,
    $Hematocritic,
    $HbA1c,
    $LDL,
    $Basophils,
    $RBC,
    $Bioimpedence);";
   
   
   $result1 = $conn->query($sql1);

    if ($result1->num_rows >= 0) {
      echo "Successful";

        }
        else{
            echo "Unsuccessful";
        }
    
    
    
    
?>