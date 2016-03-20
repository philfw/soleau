<html>
<body>
	<?php 
		echo "does this work?";

	if(isset($_POST['email'])) {

		$SoleauID = $_POST['SoleauID'];
		$subject = "Your registered work with Soleau ID#" . $SoleauID;
		$email = $_POST['email'];
		$workTitle = $_POST['workTitle'];
		$fullWork = $_POST['fullWork'];
		$message = wordwrap($workTitle, 70, "\r\n");

		echo ("Thanks for submitting your work" .$workTitle. "<br>");
		echo ("Check your email!");
		echo ("The following work will be submitted there with the ID" . $SoleauID);
		echo wordrap($fullWork, 70, "\r\n");
		
	} else {echo("Didn't work.")}

	?>
</body>
</html>