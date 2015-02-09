$(function() {
	$('img').mouseover(function(event) {
		  var width = (Math.random()*501);
		  var width = Math.round(width);
		  var length = (Math.random()*501);
		  var length = Math.round(length);
		
	$(this).attr("src","http://placekitten.com/g/" + width + "/" + length);
	});
});
