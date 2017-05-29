<?php
$to = "emrah.okic@edu.fit.ba";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: contact@spottland.com" . "\r\n";

mail($to,$subject,$txt,$headers);
?>