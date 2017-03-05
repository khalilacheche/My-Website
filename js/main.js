/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});
/* ========================================================================= */
			/* Navigation Bar under bar */
    var scrollx;
    var scrolly;
    function init()
	{
  		setInterval(Loop,10);
  		setInterval(getScrollingPosition,10);
	}
	function getScrollingPosition() {      
  		var position = [0, 0];      
  		if (typeof window.pageYOffset != 'undefined')  {      
    		position = [      
        		window.pageXOffset,      
        		window.pageYOffset      
    		];      

  		}      
  		else if (typeof document.documentElement.scrollTop!= 'undefined' && document.documentElement.scrollTop > 0)      

  		{      
    		position = [      
        		document.documentElement.scrollLeft,      
        		document.documentElement.scrollTop      
    		];      
  		}      
  		else if (typeof document.body.scrollTop != 'undefined')      {      
    		position = [      
        		document.body.scrollLeft,      
        		document.body.scrollTop      
    		];      
    	}      
  		return position;      

}
	window.onscroll = function SelectNavUnderBar()  {
		var Areas = ["Home", "AboutMe", "Portfolio", "Contact"];
		var black="#000";
		var white="#fff";
		var actualArea;      
  		var scrollpos = getScrollingPosition();      
  		switch(true) {
    		case (scrollpos[1]<300 ):
    			actualArea= "Home";
    			document.getElementById(actualArea).style.opacity = "1";
    			for(var i = 0; i < Areas.length; i++){
    				if(Areas[i]!= actualArea){
    					document.getElementById(Areas[i]).style.opacity = "0";
    				}
    			}
        	break;

    			case (scrollpos[1]<1200):
    			actualArea= "AboutMe";
    			document.getElementById(actualArea).style.opacity = "1";
    			for(var i = 0; i < Areas.length; i++){
    				if(Areas[i]!= actualArea){
    					document.getElementById(Areas[i]).style.opacity = "0";
    				}
    			}
        	break;
        	case (scrollpos[1]<3000):
    			actualArea= "Portfolio";
    			document.getElementById(actualArea).style.opacity = "1";
    			for(var i = 0; i < Areas.length; i++){
    				if(Areas[i]!= actualArea){
    					document.getElementById(Areas[i]).style.opacity = "0";
    				}
    			}
        	break;
        	case (scrollpos[1]<4000):
    			actualArea= "Contact";
    			document.getElementById(actualArea).style.opacity = "1";
    			for(var i = 0; i < Areas.length; i++){
    				if(Areas[i]!= actualArea){
    					document.getElementById(Areas[i]).style.opacity = "0";
    				}
    			}
        	break;
        	default:
    			actualArea= "Home";
    			document.getElementById(actualArea).style.opacity = "1";
    			for(var i = 0; i < Areas.length; i++){
    				if(Areas[i]!= actualArea){
    					document.getElementById(Areas[i]).style.opacity = "0";
    				}
    			}
        	
		}
			
		
     
	};

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
        var src;
    
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });
    
    
    
    $("#works, #testimonial").owlCarousel({  
        navigation : true,
        pagination : false,
        slideSpeed : 700,
        paginationSpeed : 400,
        singleItem:true,
        navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
    });
	
	
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
	
	
	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */


	
});


var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

