$(document).ready(function(){

	let navbar = $('.navbar');
	let sub_navbar = $('.sub-navbar');

	let scrollPrevious = $(window).scrollTop();

	$(window).scroll(function(){

		let scrollCurrent = $(window).scrollTop();

		let scrollTop = $(window).scrollTop();

			if(scrollTop != '0'){

				  var sub_nav_height = $('.sub-navbar').height();

				  var sidebar = $('.sidebar');

				  sidebar.css('top',sub_nav_height +'px');

				  sub_navbar.css('box-shadow','0px 5px 5px rgba(0,0,0,0.3)');

			}else{

				  var navbarHeight = $('.navbar').height() + 10;

				  var sub_nav_height = $('.sub-navbar').height();

				  var main_and_sub_nav_height = navbarHeight + sub_nav_height + 5;

				  var sidebar = $('.sidebar');

				  sidebar.css('top',main_and_sub_nav_height +'px');

				  sub_navbar.css('box-shadow','none');

			}


			scrollPrevious = scrollCurrent;

	});

	

});