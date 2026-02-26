<?php
session_start();
include("config/db.php");

if(isset($_POST['donate'])) {

    $amount = $_POST['amount'];
    $method = $_POST['method'];
    $user_id = $_SESSION['user_id'];

    $conn->query("INSERT INTO donations (user_id, amount, method)
                  VALUES ('$user_id', '$amount', '$method')");

    echo "<script>alert('Thank you " . $_SESSION['name'] . " ❤️');</script>";
}
?>

<form method="POST">
<select name="method">
<option value="mpesa">M-Pesa</option>
<option value="card">Card</option>
</select>
<input type="number" name="amount" required>
<button name="donate">Donate</button>
</form>