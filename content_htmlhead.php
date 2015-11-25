<!doctype html>
<html lang="en">
	<head>

		<?php

			$metaName = 'Sam A. Horvath-Hunt';
			$metaSiteTitle = 'Portfolio';
			$metaSiteFullName = $metaName . ' // ' . $metaSiteTitle;
			$metaThisUrl = 'http://samhh.com';
			$metaDesc = 'My name is Sam A. Horvath-Hunt. I am a web developer based in London and this website acts as both my portfolio and personal site.';
			$metaKeywords = 'samhh, sam a. horvath-hunt, sam horvath hunt, sam hunt, sam horvath, sam horvath-hunt, web dev, web development, website development, website developer, web developer, web designer, web design, website design, website designer, clutchhunter, impero, perspective publishing';

		?>

		<!-- Standard SEO -->
		<meta name="description" content="<?php echo $metaDesc; ?>">
		<meta name="keywords" content="<?php echo $metaKeywords; ?>">

		<!-- Twitter -->
		<meta name="twitter:card" value="<?php echo $metaDesc; ?>">
		<meta name="twitter:creator" value="<?php echo $metaName; ?>">
		<!-- <meta name="twitter:image" content="tbc"> -->

		<!-- Schema.org / Google+ -->
		<meta itemprop="name" content="<?php echo $metaSiteFullName; ?>">
		<meta itemprop="description" content="<?php echo $metaDesc; ?>">
		<!-- <meta itemprop="image" content="tbc"> -->

		<!-- Open Graph -->
		<meta property="og:title" content="<?php echo $metaSiteTitle; ?>">
		<meta property="og:site_name" content="<?php echo $metaName; ?>">
		<meta property="og:type" content="website">
		<meta property="og:url" content="<?php echo $metaThisUrl; ?>">
		<!-- <meta property="og:image" content="tbc"> -->
		<meta property="og:description" content="<?php echo $metaDesc; ?>">
		<meta property="og:locale" content="en_UK">

		<!-- Android Theming Colour -->
		<meta name="theme-color" content="#1976d2">

		<!-- http://humanstxt.org/ -->
		<link rel="author" type="text/plain" href="humans.txt">

		<!-- Misc -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="icon"
 href="/favicon.png" />

		<!-- Imported Fonts -->
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600">
		<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700">

		<!-- CSS Dependencies -->
		<link rel="stylesheet" type="text/css" href="node_modules/normalize.css/normalize.css">

		<!-- Personal Stylesheet(s) -->
		<link rel="stylesheet" type="text/css" href="css/main.css">

		<title>Sam A. Horvath-Hunt // Portfolio</title>

	</head>
