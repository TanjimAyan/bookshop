

$(document).ready(function(){

	var navbar_search_wrapper = $('.navbar .search-wrapper');

	var navbar_cart_signup_wrapper = $('.navbar .cart-signup-wrapper');

	var navbar = $('.navbar');

	var navbarHeight = $('.navbar').height();

	// navbar_search_wrapper.css("height", navbarHeight + "px");

	// navbar_cart_signup_wrapper.css("height", navbarHeight + "px");

	navbar.css("height", navbarHeight + "px");

  var sm_search_bg = $('.sm-search-bg');
	
  var sm_search_wrapper = $('.sm-search-wrapper');

  var sm_search_wrapper_close = $('.sm-search-bg i');

  var sm_search_icon = $('.cart-signup-wrapper .sm-search-icon');

  var container = $('.container-fluid');

  sm_search_icon.click(function(){

    sm_search_wrapper.css({"animation":"sm_search_anim 0.8s linear 1","animation-fill-mode":"forwards"});

    sm_search_bg.css('display','block');

    // container.toggleClass('active');
    

  });

  sm_search_wrapper_close.click(function(){

    sm_search_wrapper.css({"animation":"","animation-fill-mode":""});

    sm_search_bg.css('display','none');

    // container.toggleClass('active');

  });

  var sub_nav_height = $('.sub-navbar').height();

  var main_and_sub_nav_height = navbarHeight + sub_nav_height + 5;

  var sidebar = $('.sidebar');

  sidebar.css('top',main_and_sub_nav_height +'px');



  // var book_slider = $('')

  var book_author_img = $('.product_specification .col ul li section .author-profile img');

  var so_book_author_img_H = book_author_img.width();

  book_author_img.css('height',so_book_author_img_H + 'px');



});