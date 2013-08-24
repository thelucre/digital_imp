var pjs;
var current = 1;

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

	for(var i = 1; i <= 3; i++) {
		var img = document.createElement('img');
		img.src = 'test' + i + '.jpg';
		img.className = 'thumbnail';
		img.id = i;

		var thumbs = document.getElementById('thumbnails');
		thumbs.appendChild(img);
	}

	$('.thumbnail').on('click', function(e) {
		var thumbId = e.currentTarget.id;
		var updateThumb = thumbId - 1;
		pjs.reset( updateThumb );
		if(current != thumbId)
			$('#' + current).animate({ opacity: 0.5 });
		current = thumbId;
		$('#' + current).animate({ opacity: 1 });
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