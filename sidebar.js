$(document).ready(function(){

	let toggle = $('.toggle-icon');
	let sidebar = $('.sidebar');
	let sidebarWidth = sidebar.width();
	let navbar = $('.sub-navbar .swiper-container .swiper-wrapper .swiper-slide');

	sidebar.css('left','-'+ sidebarWidth +'px');

	toggle.click(function(){

		toggle.toggleClass('active');
		sidebar.toggleClass('active');
		// sidebar.css('visibility','visible');

	});



});