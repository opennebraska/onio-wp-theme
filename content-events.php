<div id="events" class="segment">
	<div class="segment-title">
		<span>Open/Nebraska Events</span>
	</div>
	<div id="events-accordion" class="accordion">
		<!-- Local Monthly Meetups -->
		<?php get_template_part('events', 'monthlymeetups'); ?>
		<!-- Hack Omaha III -->
		<?php get_template_part('events', 'hackomaha3'); ?>
		<!-- Hack Lincoln -->
		<?php get_template_part('events', 'hacklincoln'); ?>
		<!-- National Day of Civic Hacking -->
		<?php get_template_part('events', 'civichackingday'); ?>
	</div>
</div>