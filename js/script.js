;(function() {
	var onio = {};
	onio.menu = ['home', 'projects', 'upcoming', 'events', 'conversations', 'contact'];

	function setupOwl() {
		$('.content').owlCarousel({
			navigation:false,
			pagination:false,
			paginationSpeed : 1000,
			slideSpeed: 300,
			singleItem : true,
			transitionStyle:"fadeUp",
			afterMove: handleAfterMove
		});
		// hook for custom navigation
		onio.owl = $('.content').data('owlCarousel');
	}

	function handleAfterMove() {
		var current = onio.owl.owl.currentItem,
			navEl = $('a[data-owl]')[current - 1];
		// only set current to active
		$('.nav-item').removeClass('active');
		$(navEl).addClass('active');
		// collapse any expanded accordion panels
		$('.panel-collapse').removeClass('in');
		// and remove any selected classes
		$('.accordion span').removeClass('selected');
	}

	function setupRoutes() {
		// setup crossroads
		crossroads.addRoute('{path}', function(path) {
			onio.owl.goTo(onio.menu.indexOf(path));
		});
		// pair crossroads with hasher
		var proxy = function( newHash, oldHash ) { crossroads.parse( newHash ); };
		// parse hash on initialize
		hasher.initialized.add( proxy );
		// parse hash when it changes
		hasher.changed.add( proxy );
		// start listening for history change
		hasher.init();
	}

	$(document).ready(function() {
		// setup owl carousel/site nav controller
		setupOwl();
		// setup client-side routing
		setupRoutes();
		// fade in content on load
		setTimeout(function() {
			$('.content-container').addClass('show-opacity');
		}, 1000);
		// set click event on O/N logo
		$('.on-logo').on('click', function(e) {
			// set hash and let it take care of state
			hasher.setHash('home');
		});
		// set click event on nav items
		$('.nav-item').on('click', function(e) {
			$('.nav-item').removeClass('active');
			if ($(document).scrollTop() !== 172) {
				$('body').animate({
					scrollTop: 172
				}, 700);
			}
			var item = $(e.target).attr('data-owl');
			// set hash and let it take care of state
			hasher.setHash(item);
			$(e.target).addClass('active');
		});

		// accordion
		$('.accordion').collapse();

		$('a[data-toggle]').on('click', function(e) {
			var backingSpan = $(e.target).closest('span');

			if (!backingSpan.hasClass('selected')) {
				$('.accordion span').removeClass('selected');
				backingSpan.addClass('selected');
			}
			else {
				$('.accordion span').removeClass('selected');
			}
		});

		// menu affix
		$(window).scroll(function() {
			if ($(document).scrollTop() >= 142) {
				$('#menu-affix').addClass('affixed');
			}
			else {
				$('#menu-affix').removeClass('affixed');
			}
		});

	});

}());