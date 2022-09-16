<?php
$name=$_POST['name'];
$email=$_POST['email'];
$msg=$_POST['message'];
$to= "qayyumgb96@gmail.com"; // Receiver Email ID, Replace with your email ID
$subject='New Query';
// $message="Name :".$fname."\n"."Wrote the following :"."\n\n".$msg;
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .="From:".$email;

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
";

mail($to, $subject, $message, $headers);
?>