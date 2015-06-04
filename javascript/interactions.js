$( document ).ready(function() {

        var activated = false;
   
    	$('#hamburger').click(function(){

    		if (activated == false) {
    		$('.nav__main--ul li').css('display', 'inline-block');
    		activated  = true
    		}

    		else {
			$('.nav__main--ul li').css('display','none');
    		activated = false
    		}	

    	});


});