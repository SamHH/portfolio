<?php
	require('content_htmlhead.php');
?>

	<body>

		<a class="anchor" name="home"></a>
		<header class="landing">

			<?php
				require('content_nav.php');
			?>

			<section class="landing__title" id="jsFold">

				<div class="width-limiter">

					<h5>The portfolio of</h5>

					<h1>Sam A. Horvath-Hunt</h1>

					<h5>A <span id="jsJobTitleText">web developer</span> from London, UK</h5>

					<hr>

				</div>

			</section>

		</header>

		<main>

			<a class="anchor" name="expertise"></a>
			<section class="general-block">

				<div class="width-limiter">

					<h2>What I do</h2>

					<p>
						I make websites.
					</p>

					<h2>What I do in a little more detail</h2>

					<p>
						I develop (and sometimes design) high quality websites. The markup is semantic and without bloat, the styling is responsive and modular, and the scripting is modern and performant. And that's just the start.
					</p>

					<h2>That's great and all, but could you show me a sample?</h2>

					<p>
						Sure thing! This very website is one such example. You can view the full source code on GitHub here: <a href="https://github.com/SamHH/portfolio" target="_blank">github.com/SamHH/portfolio</a>
					</p>

				</div>

			</section>

			<a class="anchor" name="projects"></a>
			<section class="alternating-sides-block">

				<div class="width-limiter">

					<h2>Projects to date</h2>

					<div class="clearfix">

						<div class="alternating-sides-block__chunk">

							<h3>Perspective Publishing CMS</h3>

							<p>
								Design, frontend & backend, ~ Autumn 2015<br><br>

								By far the biggest project I've ever taken on, this new CMS was made to replace a legacy system that had been around for almost a decade. The most fundamental change was to bring the CMS' of several dozen event websites under one umbrella. This also coincided with the new events design below.<br><br>

								The biggest challenge for me here was PHP and MySQL -- technologies I was only vaguely familiar with prior to starting. The end result was very strong and a grand improvement over its predecessor.<br><br>

								Unfortunately the site is understandably private and I am not legally authorised to show you a picture or any code from it, so you'll have to take my word for it when I say it's bloody marvellous.
							</p>

						</div>

						<div class="alternating-sides-block__chunk">

							<h3>Perspective Publishing events <a href="http://bettersociety.net/awards/" target="_blank"><span class="fa fa-external-link"></span></a> <a href="http://www.cirmagazine.com/businesscontinuityawards/" target="_blank"><span class="fa fa-external-link"></span></a> <a href="http://www.engagementandloyalty.com/" target="_blank"><span class="fa fa-external-link"></span></a></h3>

							<p>
								Design, frontend & backend, ~ Summer 2015<br><br>

								This redesign was all about bringing the events sites into the 21st century. Whilst there are aspects I'm not fond of (background images, carousel, inconsistent typography), sacrifices were made along the way for the sake of events staff/editors having control over the websites they would publish. This ties in to the new CMS above.
							</p>

						</div>

						<div class="alternating-sides-block__chunk">

							<h3>Perspective Publishing landing <a href="http://www.perspectivepublishing.com/pp/" target="_blank"><span class="fa fa-external-link"></span></a></h3>

							<p>
								Design, frontend & backend, ~ Spring 2015<br><br>

								Fun, this one. Our previous landing page was literally just a picture of a wall with some text sprawled atop it in a very, ahem, <em>unique</em> manner. There was no useful information beyond how to contact the company and visiting it gave you no ideas about what the company actually does.<br><br>

								The new design is all about making that clear. This was also my first ever fully responsive site.
							</p>

						</div>

						<div class="alternating-sides-block__chunk">

							<h3>Perspective Publishing magazines <a href="http://www.pensionsage.com/pa/" target="_blank"><span class="fa fa-external-link"></span></a> <a href="http://www.europeanpensions.net/ep/" target="_blank"><span class="fa fa-external-link"></span></a> <a href="http://www.fstech.co.uk/fst/" target="_blank"><span class="fa fa-external-link"></span></a></h3>

							<p>
								Frontend, ~ Summer 2014<br><br>

								The magazine redesign here was handled by someone from the production department and the backend was handled by my boss, so this project had me working solely on the frontend.<br><br>

								Looking at a lot of the code now makes my head hurt (I was only a few months into an apprenticeship after all), but that's how I know I've learned since then. There are so many things I'd do differently and objectively better and yet I'm still proud of what I was able to accomplish at the time.
							</p>

						</div>

					</div>

					<h3 class="alternate-colors"><span>Original.</span> <span>Professional.</span> <span>Passionate.</span></h3>

				</div>

			</section>

			<a class="anchor" name="contact"></a>
			<section class="general-block" id="jsFormContainer">

				<form id="jsForm">
					<h2>Get in touch</h2>
					<input type="text" id="jsFormName" placeholder="Your name" required>
					<input type="email" id="jsFormEmail" placeholder="Your email address (optional)">
					<input type="text" id="jsFormSubject" placeholder="Subject" required>
					<textarea id="jsFormMessage" placeholder="Message" required></textarea>
					<button type="submit" id="jsFormButton">Send</button>
				</form>

				<div class="form-notice" id="jsFormNotice">Thanks for getting in touch. I'll get back to you as soon as I can!</div>

			</div>

		</main>

		<?php
			require('content_footer.php');
		?>

		<?php
			require('content_scripts.php');
		?>

	</body>

</html>
