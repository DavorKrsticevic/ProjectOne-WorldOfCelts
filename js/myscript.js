$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn(2000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
function FormSubmission() {
    alert("The form was submitted successfully. We will contact you shortly. Thank you");
}


$(document).ready(function(){
    
    if (innerWidth >= 401) { 
    	var big = $("#big");
        var about = $("#aboutdivison")
        big.animate({fontSize: '5em',opacity: '1'}, 2000);
        about.animate({opacity: '1'}, 3500);
    }
    else { 
    	var big = $("#big");
        var about = $("#aboutdivison")
        big.animate({fontSize: '3em',opacity: '1'}, 2000);
        about.animate({opacity: '1'}, 3500);
    }
});
