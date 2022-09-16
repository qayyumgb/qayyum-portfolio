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
		$message = '
		<html lang="en">

		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Abdul Qayyum</title>
		</head>
		
		<body link="#00a5b5" vlink="#00a5b5" alink="#00a5b5" style="background-color: aliceblue;">
		
			<table class=" main contenttable" align="center" style="font-weight: normal;border-collapse: collapse;border: 0;margin-top: 30px; margin-bottom: 30px; margin-left: auto;margin-right: auto;padding: 0;font-family: Arial, sans-serif;color: #555559;background-color: white;font-size: 16px;line-height: 26px;width: 600px;">
				<tr>
					<td colspan="4" valign="top" class="image-section" style="text-align: left;">
				   <img class="top-image" src="https://i.ibb.co/6mWbnKR/Saufik-Logo.png" style="padding: 17px 0 0 28px; line-height: 1;width: 120px; max-width: 120px; margin: auto;" alt="">
					</td>
					</tr>
				<tr>
			<td class="" style="border-collapse: collapse; margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;">
			<table style="font-weight: normal;border-collapse: collapse;border: 0;margin: auto;padding: 0;font-family: Arial, sans-serif;">
			
			<tr>
			<td valign="top" class="side title" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;vertical-align: top;background-color: white;border-top: none;">
			<table style="font-weight: normal;border-collapse: collapse;border: 0;margin: 0;padding: 0;font-family: Arial, sans-serif;">
			
			<tr>
			<td class="top-padding" style="border-collapse: collapse;border: 0;margin: 0;padding: 5px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;"></td>
			</tr>
			<tr>
			<td class="grey-block" style="border-collapse: collapse;border: 0;margin: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background-color: #fff; text-align:center;">
			<div class="mktEditable" id="cta" style="text-align: center;">
			<img class="top-image" src="https://i.ibb.co/x150Zsr/Email-Marketing.png" width="240" style="width: 240px; max-width: 240px; margin: auto;"/><br><br>
			
			</div>
			</td>
			</tr>
			<tr>
				<td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 20px;line-height: 29px;font-weight: bold; text-align: center;">
				<div class="mktEditable" id="main_title" style="text-align: center;">
				   A new message has been received. Detail as under:
				</div>
				</td>
				</tr>
				<tr>
					<td class="head-title" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 15px;line-height: 27px; text-align: center;">
					<div class="mktEditable" id="main_title">
						<div style="text-align: center;">
						   <span style="font-weight: 700;">Name:</span><span>'.$name.'</span>  
						</div>
					   <div style="text-align: center;">
						<span style="font-weight: 700;">Email:</span><span>'.$email.'</span> 
					   </div>
					   <div style="line-height: 1.5; text-align: center;">
						<span style="font-weight: 700;">Message:</span><span> '.$msg.'</span> 
					   </div>
					   
					</div>
					</td>
					</tr>
			
			<tr>
			
			</tr>
			<tr>
			
			</tr>
			<tr>
			<td class="text" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
			<div class="mktEditable" id="download_button" style="text-align: center;">
			</div>
			</td>
			</tr>
			
			</table>
			</td>
			</tr>
			<tr>
			<td style="padding:20px; font-family: Arial, sans-serif; -webkit-text-size-adjust: none;" align="center">
			</td>
			<td class="rm-col" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;padding-right: 15px;"></td>
			<td class="force-col" valign="top" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 24px;">
			</td>
			</tr>
			</table>
			</td>
			</tr>
			
			<tr bgcolor="#fff">
				<td valign="top" class="footer" style="border-collapse: collapse;border: 0;margin: 0;padding: 0;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 16px;line-height: 26px;background: #efefef;text-align: center;">
					<table style="font-weight: normal;border-collapse: collapse;border: 0;margin: auto;padding: 0;font-family: Arial, sans-serif;">
					<tr>
					<td class="inside-footer" align="center" valign="middle" style="border-collapse: collapse;border: 0;margin: 0;padding: 20px;-webkit-text-size-adjust: none;color: #555559;font-family: Arial, sans-serif;font-size: 12px;line-height: 16px;vertical-align: middle;text-align: center;width: 580px;">
					<div style="line-height: 1.8; float: left;">
						<div id="address" class="mktEditable" style="text-align: left;">
							<img width="12" src="https://i.ibb.co/N2Hx3Nn/call.png" style="width: 12px; max-width: 12px; margin: auto;">
						Phone: +92 51 835-6733
					   </div>
					   <div id="address" class="mktEditable" style="text-align: left;">
					   <img width="15" src="https://i.ibb.co/3y4ZnfM/location.png" style="max-width: 15px; width: 15px; margin: auto;">
					   Plot 349, Street 01, I 9/3 Islamabad <br>  Capital Territory, 44000.
				   
				   		</div>
					</div>
					  <div style="line-height: 1.8; float: right;">
					  <div id="address" class="mktEditable" style="text-align: left">
					  <img width="14" src="https://i.ibb.co/KmVVCp8/website.png" style="width: 14px; max-width: 14px; margin: auto;">
					  <a style="color: #00a5b5;" target="_blank" href="http://saufik.com/">www.saufik.com</a>
				   	</div>
							<div id="address" class="mktEditable" style="text-align: left">
								<img width="15" src="https://i.ibb.co/XYST330/email.png" style="width: 15px; max-width: 15px; margin: auto;">
						info@saufik.com
							  </div>
					  </div>
				   
					</td>
					</tr>
					</table>
					</td>
			</tr>
			</table>
			</body>
		</html>';

		 if(mail($to, $subject, $message, $headers)){
			echo "true";
		 }
		 else{
		 	echo "false";
		 }
?>
