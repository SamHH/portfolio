<!doctype html>
<html lang="en">
	<head>

		<?php

			$metaName = 'Sam A. Horvath-Hunt';
			$metaSiteName = 'Portfolio';
			$metaSiteTitle = $metaName . $metaSiteName;
			$metaThisUrl = 'http://samhh.com';
			$metaDesc = 'My name is Sam A. Horvath-Hunt. I am a web developer based in London and this website acts as both my portfolio and personal site.';
			$metaKeywords = 'samhh, sam a. horvath-hunt, sam horvath hunt, sam hunt, sam horvath, sam horvath-hunt, web dev, web development, website development, website developer, web developer, web designer, web design, website design, website designer, clutchhunter, impero, perspective publishing';

		?>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<meta name="description" content="<?php echo $metaDesc; ?>">
		<meta name="keywords" content="<?php echo $metaKeywords; ?>">

		<!-- Twitter -->
		<meta name="twitter:card" value="<?php echo $metaDesc; ?>">
		<meta name="twitter:creator" value="<?php echo $metaName; ?>">
		<!-- <meta name="twitter:image" content="tbc"> -->

		<!-- Schema.org / Google+ -->
		<meta itemprop="name" content="<?php echo $metaSiteTitle; ?>">
		<meta itemprop="description" content="<?php echo $metaDesc; ?>">
		<!-- <meta itemprop="image" content="tbc"> -->

		<!-- Open Graph -->
		<meta property="og:title" content="<?php echo $metaSiteTitle; ?>">
		<meta property="og:type" content="website">
		<meta property="og:url" content="<?php echo $metaThisUrl; ?>">
		<!-- <meta property="og:image" content="tbc"> -->
		<meta property="og:description" content="<?php echo $metaDesc; ?>">
		<meta property="og:locale" content="en_UK">

		<link rel="author" type="text/plain" href="humans.txt">

		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600">
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">

		<link rel="stylesheet" type="text/css" href="node_modules/font-awesome/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="node_modules/normalize.css/normalize.css">

		<link rel="stylesheet" type="text/css" href="css/style.css">

		<!-- scripts that require loading before page load here only, rest at the bottom in scripts import -->

		<title>Sam A. Horvath-Hunt // Portfolio</title>

	</head>
