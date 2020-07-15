// JavaScript Document

$(document).ready(function() {
	//FORCE VIDEO PLAY - SAFARI 11 ISSUE
	$(window).load(function() {
		$('#imagearea').data('vide').getVideoObject().play();
	});
});