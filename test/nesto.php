<?php
$to = "emrah.okic@edu.fit.ba";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: emrahokic96@hotmail.com" . "\r\n";

mail($to,$subject,$txt,$headers);
?>