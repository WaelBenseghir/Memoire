<?php
include 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $category = $_POST['category'];
    $sunlight = $_POST['sunlight'];
    $maturityTime = $_POST['maturity'];
    $watering = $_POST['watering'];
    $soil = $_POST['soilType'];
    $problems = $_POST['problems'];
    $uses = $_POST['uses'];
    $temperature = $_POST['temperature'];
    $soilPH = $_POST['soilPH'];
    $pestsDeseas = $_POST['pests'];
    $image = $_FILES['image'];
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($image['name']);
    if (move_uploaded_file($image['tmp_name'], $target_file)) {

        $stmt = $conn->prepare("INSERT INTO plant (name, description, category, sunlight, maturityTime, watering, soil, problems,uses, temperature, soilPH, pestsDeseas, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$name, $description, $category, $sunlight, $maturityTime, $watering, $soil, $problems, $uses, $temperature, $soilPH, $pestsDeseas, $target_file]);


        echo json_encode(['success' => true]);
        exit();
    } else {
        echo json_encode(['success' => false, 'message' => 'Error uploading file.']);
        exit();
    }
}
?>



