<?php
session_start();
if(!isset($_SESSION['user_id'])) {
    header("Location: login.php");
}
?>

<h1>Welcome <?php echo $_SESSION['name']; ?> 👑</h1>
<a href="donate.php">Make Donation</a>
<a href="logout.php">Logout</a>