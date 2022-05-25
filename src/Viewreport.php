<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');   


    
    $conn = new mysqli("localhost", "root", "", "obesity silo");
    $sql1 = "Select WBC, Haemoglobin, eGFR, ALT, Platelet, creatinine, AST, BUN, DBP, Protein, GGT, Albumin, Triglyceride, Cholestrol, Segmented_Neutrophil,Lymphocytes, Eosinophils, Uric Acid, Hematocrit, HbA1c, LDL, Basophis, RBC, Bioimpedence

    FROM patientclinincalrecord";

    $result1 = $conn->query($sql1);

    if ($result1 != null) {
        while ($row1 = $result1->fetch_assoc()) {
                $jsn['dat'][]=array('WBC'=> $row1["WBC"],'Haemoglobin'=> $row1["Haemoglobin"], 'eGFR'=>$row1["eGFR"],'ALT'=> $row1["ALT"],'Platelet'=> $row1["Platelet"],'creatinine'=> $row1["creatinine"],'AST'=> $row1["AST"],'BUN'=> $row1["BUN"],'DBP'=> $row1["DBP"],'Protein'=> $row1["Protein"],'GGT'=> $row1["GGT"],'Albumin'=> $row1["Albumin"],'Triglyceride'=> $row1["Triglyceride"],'Cholestrol'=> $row1["Cholestrol"],'Segmented_Neutrophil'=> $row1["Segmented_Neutrophil"],'Lymphocytes'=> $row1["Lymphocytes"],'Eosinophils'=> $row1["Eosinophils"],'Uric Acid'=> $row1["Uric Acid"],'Hematocrit'=> $row1["Hematocrit"],'HbA1c'=> $row1["HbA1c"],'LDL'=> $row1["LDL"],'Basophils'=> $row1["Basophils"],'RBC'=> $row1["RBC"],'Bioimpedence'=> $row1["Bioimpedence"]);
        }
        $display= json_encode($jsn);
        echo $display;
    }
    else{
        echo "Patient not found";
    }
    