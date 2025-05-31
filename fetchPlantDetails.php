<?php
include 'connect.php'; 


if (!isset($_GET['plant_id'])) {
    echo json_encode(["error" => "Plant ID is required"]);
    exit;
}

$plantId = $_GET['plant_id'];
$sql = "SELECT * FROM plant WHERE plant_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $plantId);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $plantDetails = $result->fetch_assoc();
    echo json_encode($plantDetails); 
} else {
    echo json_encode(["error" => "Plant not found"]); 
}

$stmt->close();
$conn->close();
?>