$(document).ready(function(){

	var card_img = $('.book_slider .swiper-container .swiper-wrapper .swiper-slide .img-wrapper img');

	var cardImg_width = card_img.width();

	var cardImg_height = cardImg_width * 1.35;

	card_img.css('height',cardImg_height + 'px');


});