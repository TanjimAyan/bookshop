var url_string = window.location.href;
var url = new URL(url_string);

var product_img = url.searchParams.get("product_img");
var cate = url.searchParams.get("cate");

document.querySelector('.book_img_wrapper img').setAttribute("src", "images/" + product_img);

document.querySelector('.product_details_sec1 > .col:first-child .details_wrapper .cate a').innerHTML = cate;