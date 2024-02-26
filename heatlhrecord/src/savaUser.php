<?php
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "healthrecords-login";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the POST data from the React app
$data = json_decode(file_get_contents('php://input'), true);

// Insert the data into the MySQL database
$sql = "INSERT INTO users (name, phonenumber, email, password) VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $data['email'], $data['password'], $data['name'], $data['phoneNumber']);

if ($stmt->execute()) {
    echo json_encode(array('status' => 'success'));
} else {
    echo json_encode(array('status' => 'error', 'message' => $stmt->error));
}

$stmt->close();
$conn->close();
?>