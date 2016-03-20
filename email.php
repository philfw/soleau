<html>

	<head>
		<link rel="stylesheet" type="text/css" href="css/reset.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<style>
			h1 {
				margin-top:20%;
				width:90%;
				margin-left:5%;
				text-align:center;
			}
			p {
				font-size:2em;
				margin-top:20px;
				line-height:1;
				width:80%;
				margin-left:10%;
				text-align:center;
			}
			header {
				position:fixed;
				top:0;
			}
		</style>
	</head>

	<body>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
		<script src="js/jquery-1.12.0.min.js"></script>

		<header class="clearfix">
			<a class ="left logo" href="index.html">Soleau</a>
			<nav class ="right clearfix">
				<ul>
					<li class="right"><a href="#about" class="next">About</a></li>
					<li class="right"><a class="faq" href="faq.html">FAQ</a></li>
					<li class="right"><a class="faq" href="https://twitter.com/search?src=typd&q=%40soleauletter" target="_blank">@SoleauLetter</a></li>
				</ul>
				<div class="hamburger">
					<div class="line"></div>
					<div class="line"></div>
					<div class="line"></div>
					<div id="">
				</div>
			</nav>
		</header>

		<?php
			
			if(isset($_POST['email'])) {
				$SoleauID = $_POST['SoleauID'];
				$workTitle = $_POST['workTitle'];
				$subject = $workTitle . " Your registered work with Soleau ID#" . $SoleauID;
				$email = $_POST['email'];
				$work = $_POST['yourwork'];
				$message = wordwrap($work, 70, "\r\n");

				echo "<h1>You just registered a work with ID " . $SoleauID . ", which was delivered to " . $email . "</h1>";
				echo "<p>The title of the Work is " . $workTitle . "<br>";
				echo "The work in full: <br>" . $work . "<br>";
				echo "Check your email!</p>";

				mail($email, $subject, $message);

			}
		?>

		<div id="work">
			<p>Now you can click the button below to compose a Tweet with the same Soleau ID!</p>
			<a href="https://twitter.com/share?text=.@SoleauLetter I just registered a work with SoleauID %23<?php echo $SoleauID?>" target="_blank">Tweet!</a>

		<script src="js/index.js"></script>
	</body>
</html>