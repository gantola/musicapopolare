$(document).ready(function() {
	
	$('body').addClass('js');

	if($(".menu-link").length){
		var $menu = $('#menu'),
		$menulink = $('.menu-link');

		$menulink.click(function() {
			$menulink.toggleClass('rolled-down');
			$menu.toggleClass('rolled-down');
			return false;
		});
	}

	if($(".search-link").length){
		var $search = $('#search'),
		$searchlink = $('.search-link');

		$searchlink.click(function() {
			$searchlink.toggleClass('rolled-down');
			$search.toggleClass('rolled-down');
			return false;
		});
	}

	// Apre external links in una nuova finestra
	hostname = window.location.hostname
	$("a[href^=http]")
	.not("a[href*='" + hostname + "']")
	.addClass('link external')
	.attr('target', '_blank');

	if($(".rslides-main").length){
	  $(".rslides-main").responsiveSlides({
		//maxwidth: 994
		pager: true,           // Boolean: Show pager, true or false
		//nav: true,
		pause: true       // Boolean: Pause on hover, true or false
		//pauseControls: true
	  });
	}

	if($('.nav-main li ul').length){
		drop();
	}

	
	if($('.nav-categories').length){
		var $submenu = $(".nav-categories li ul");
		$submenu.hide();
		$(".nav-categories strong").css("cursor","pointer").toggle(function(){
			$(this).addClass("active"); 
			}, function () {
			$(this).removeClass("active");
		});
		
		$(".nav-categories strong").click(function(){
			$(this).next($submenu).slideToggle("slow");
		});
	}
	
});

function drop(){
	var submenu = $('.nav-main li ul');
	submenu.addClass('is-hidden');
	$.each(submenu, function(){
	$(this).prev().addClass("has-submenu");
	});

	$('.nav-main li').hover(function() {
	$(this)	 
	  .addClass('hover')
	  .find('ul')
	  .stop(true, true)
	  .removeClass('is-hidden')
	  //.slideDown('fast');
	}, function() {
	$(this)
	  .removeClass("hover")
	  .find('ul')
	  .stop(true,true)
	  .addClass('is-hidden')
	  //.fadeOut('fast');
	});
	return false;
}