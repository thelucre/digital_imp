var pjs;
var current = 0;
var reset = true;

$(document).ready( function() {

	var bound = false;

  function bindJavascript() {
    pjs = Processing.getInstanceById('digimp');
    if(pjs!=null) {
      pjs.bindJavascript(this);
      bound = true;
    }
    if(!bound) setTimeout(bindJavascript, 250);
  }

  bindJavascript();

	for(var i = 0; i <= 5; i++) {
		var img = document.createElement('img');
		img.src = 'img/test' + i + '.jpg';
		img.className = 'thumbnail';
		img.id = i;

		var thumbs = document.getElementById('thumbnails');
		thumbs.appendChild(img);
	}

	$('.thumbnail').on('click', function(e) {
		var thumbId = e.currentTarget.id;
		var updateThumb = thumbId;
		pjs.reset( updateThumb );
		$('#click-display').fadeIn();
		reset = true;
		if(current != thumbId)
			$('#' + current).animate({ opacity: 0.5 });
		current = thumbId;
		$('#' + current).animate({ opacity: 1 });
	});

	$('#digimp').on('click', function() {
		if(reset) {
			$('#click-display').fadeOut();
			reset = false;
		}
	});

	$(".thumbnail").css({ opacity: 0.5 }).hover(function() {
	  $(this).animate({ opacity: 0.8 });
	}, function() {
		if(this.id != current)
	  	$(this).animate({ opacity: 0.5 });
	});

	$('#' + current).animate({ opacity: 1 });

});

$(window).load(function(){
    
});