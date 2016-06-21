jQuery(document).ready(function() {
	scrollingEffect();
});

function scrollingEffect() {
	 $('nav a').click(function(event) {
	 	event.preventDefault();
	 	var sectionID = event.currentTarget.id + "Section";

	 	$('html body').animate({
	 		scrollTop: $('#' + sectionID).offset().top
	 	}, 900);
	 });
}