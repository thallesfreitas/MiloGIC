$(document).ready(function(){
	$('.local-scroll').localScroll({offset: {top: -110},duration: 1500,easing:'easeInOutExpo'});
	$(window).scroll(function(){
		if ($(window).scrollTop() > ($(window).height()-$('.main-nav').height())){
		    $('.main-nav').addClass("sticky");
		}else{
		    $('.main-nav').removeClass("sticky");
		}
	   
	});
	$('.texts input').click(function(event) {
	  $('.texts').find("input[name='accordion-1']:checked").click();
	});

 	$('.bgPrize').onScreen({
        tolerance: 2,
        doIn: function () { 
        	document.getElementById("planeAnimate").beginElement(); 
        },
        doOut: function () {  }
    });

 	$('#about-graph').onScreen({
        tolerance: 2,
        doIn: function () {
        	document.getElementById("GraphAnimate").beginElement();
        	var object = document.getElementById("RectGraphAnimate2");
    		object.setAttribute("height", 0);
        },
        doOut: function () {  }
    });
});