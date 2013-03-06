<!doctype html>

<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Bouncing Ball</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 

		<link rel="stylesheet" href="base.css">
		<link rel="stylesheet" href="ball-demo.css">
		<!--[if IE]> 
			<style type="text/css">
				.shadow {
					display: none;
				}
			</style>
		<![endif]-->
	</head>

	<body>

		<div class="red ball"></div>
		<div class="ball shadow"></div>
		<div class="count">
			<p>
				Clicks: <span class="counter">0</span>
			</p>
		</div>

		<?php include('footer.php'); ?>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="jquery.animate-shadow-min.js"></script>
		<script src="ball-demo.js"></script>

	</body>
</html>