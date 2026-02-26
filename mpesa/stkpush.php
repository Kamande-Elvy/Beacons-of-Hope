<?php

$consumerKey = "YOUR_CONSUMER_KEY";
$consumerSecret = "YOUR_CONSUMER_SECRET";

$credentials = base64_encode($consumerKey . ":" . $consumerSecret);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Basic $credentials"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$token = json_decode($response)->access_token;

/* STK Push logic continues here */
?>