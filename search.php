<?php
 header('Access-Control-Allow-Origin: http://localhost:3000');
$search="Khawar Boink";



$conn = new mysqli("localhost", "root", "", "obesity silo");
$sql1 = "SELECT * FROM patientprofile WHERE patientName = '$search'";
$result1 = $conn->query($sql1);
if ($result1 != null) {
    while ($row1 = $result1->fetch_assoc()) {
            $jsn['dat'][]=array('Id'=> $row1["patientId"],'name'=> $row1["patientName"], 'gender'=>$row1["gender"]);
    }
    $display= json_encode($jsn);
    echo $display;
}
else{
    echo "Patient not found";
}

?>
