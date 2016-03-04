$("#yelp_slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#yelp_slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#yelp_slideshow');
},  8000);


//choose service
jQuery(document).ready(function() {
	jQuery("#conventional .choose_btn").click(function() {
		jQuery("#conventional").css("background-color", "#222222");
		jQuery("#blend").css("background-color", "#DEDCDA");
		jQuery("#full").css("background-color", "#DEDCDA");
	});
	
	jQuery("#blend .choose_btn").click(function() {
		jQuery("#conventional").css("background-color", "#DEDCDA");
		jQuery("#blend").css("background-color", "#222222");
		jQuery("#full").css("background-color", "#DEDCDA");
	});
	
	jQuery("#full .choose_btn").click(function() {
		jQuery("#conventional").css("background-color", "#DEDCDA");
		jQuery("#blend").css("background-color", "#DEDCDA");
		jQuery("#full").css("background-color", "#222222");
	});
});

//choose filter
jQuery(document).ready(function() {
	jQuery(".filter ul li:nth-child(1)").click(function() {
		jQuery(".filter ul li:nth-child(1)").css("background-color", "#222222");
		jQuery(".filter ul li:nth-child(1) h3").css("color", "#c8a142");
		jQuery(".filter ul li:nth-child(2)").css("background-color", "#DEDCDA");
		jQuery(".filter ul li:nth-child(2) h3").css("color", "black");
	});
	
	jQuery(".filter ul li:nth-child(2)").click(function() {
		jQuery(".filter ul li:nth-child(2)").css("background-color", "#222222");
		jQuery(".filter ul li:nth-child(2) h3").css("color", "#c8a142");
		jQuery(".filter ul li:nth-child(1)").css("background-color", "#DEDCDA");
		jQuery(".filter ul li:nth-child(1) h3").css("color", "black");
	});
});