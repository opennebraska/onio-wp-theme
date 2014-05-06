<?php get_header(); ?>
<!-- <section id="content" role="main"> -->
<div class="background">
		<img src="<?php echo get_template_directory_uri(); ?>/img/i80.jpg" />
	</div>
	<?php get_template_part('nav', 'top'); ?>
	<div class="content-container">
		<div class="content" class="owl-carousel owl-theme">
			<!-- HOME -->
			<?php get_template_part('content', 'home'); ?>
		    <!-- PROJECTS -->
		    <?php get_template_part('content', 'projects'); ?>
			<!-- UPCOMING -->
			<?php get_template_part('content', 'upcoming'); ?>
			<!-- EVENTS -->
			<?php get_template_part('content', 'events'); ?>
			<!-- CONVERSATIONS -->
			<?php get_template_part('content', 'conversations'); ?>
			<!-- CONTACT -->
			<?php get_template_part('content', 'contact'); ?>
		</div>
	</div>
<!-- </section> -->