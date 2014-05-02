function setupRoutes() {
	crossroads.addRoute('test');
	crossroads.routed.add(console.log, console);

	var projectRoute = crossroads.addRoute('/projects/{project}', function(project) {
		console.log(project);
	});

	crossroads.parse(document.location.pathname);
}

$(document).ready(function() {
	// setup client-side routing
	setupRoutes();

	setTimeout(function() {
		$('.content-container').addClass('show-opacity');
	}, 1000);

	// set up data array to grab index's from
	var menuArray = ['home', 'projects', 'upcoming', 'events', 'conversations', 'contactus'];

	$('.content').owlCarousel({
        navigation:false,
        pagination:false,
        paginationSpeed : 1000,
        slideSpeed: 300,
        singleItem : true,
        transitionStyle:"fadeUp",
        afterMove: updateNav
	});

	// hook for custom navigation
	var owl = $('.content').data('owlCarousel');

	$('.on-logo').on('click', function(e) {
		owl.goTo(0);
	});
	// set click event on nav items
	$('.nav-item').on('click', function(e) {
		$('.nav-item').removeClass('active');
		if ($('body').scrollTop() !== 172) {
			$('body').animate({
				scrollTop: 172
			}, 700);
		}
		owl.goTo(menuArray.indexOf($(e.target).attr('data-owl')));
		$(e.target).addClass('active');
	});

	function updateNav() {
		var current = owl.owl.currentItem,
			navEl = $('a[data-owl]')[current - 1];
		$('.nav-item').removeClass('active');
		$(navEl).addClass('active');
	}

	// accordion
	$('.accordion').collapse();

	// affix
	$(window).scroll(function() {
		if ($('body').scrollTop() >= 142) {
			$('#menu-affix').addClass('affixed');
		}
		else {
			$('#menu-affix').removeClass('affixed');
		}
	});

});