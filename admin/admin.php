<?php
session_start();
include("../config/db.php");

if($_SESSION['role'] != 'admin') {
    die("Access denied");
}

$result = $conn->query("SELECT users.name, donations.amount, donations.method
                        FROM donations
                        JOIN users ON donations.user_id = users.id");

while($row = $result->fetch_assoc()) {
    echo $row['name'] . " donated KES " . $row['amount'] . " via " . $row['method'] . "<br>";
}
?>