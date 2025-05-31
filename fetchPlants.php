<?php
include 'connect.php';

$sql = "SELECT * FROM plant";
$result = $conn->query($sql);

$plants = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $plants[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($plants);

$conn->close();
?>