<?php
 header('Access-Control-Allow-Origin: http://localhost:3000');
$search="Khawar Boink";

$conn = new mysqli("localhost", "root", "", "obesity silo");
$sql1 = "SELECT * FROM patientprofile WHERE patientName = '$search'";
$result1 = $conn->query($sql1);
if ($result1 != null) {
    while ($row1 = $result1->fetch_assoc()) {
        echo $row1["patientId"];
        echo '<br>';
            echo $row1["patientName"];
            echo '<br>';
            echo $row1["patientName"];
            echo '<br>';
            echo $row1["gender"];
            echo '<br>';
            echo $row1["dateOfBirth"];
    }
}
else{
    echo "Patient not found";
}

?>
