$(document).ready(function(){
    
    'use strict';

    
    $(window).scroll(function(){
        'use strict';
        if($(window).scrollTop()< 80){            
            $('.navbar').css({
                'margin-top':'-100px',
                'opacity':'0'
            });
            
            $('.navbar-default').css({
                'background-color':'rgba(59 ,59 ,59 , 0)'
            });
            
        }else{
             $('.navbar').css({
                'margin-top':'0px',
                'opacity':'1'
            });
            
            
            
            $('.navbar-default').css({
                'background-color':'rgba(59,59,59,0.7)',
                'border-color':'#444'
            });
            
            $('navbar-brand').css({
                'padding-top':'0px',
                'height':'35px'
            });
            
            $('navbar-nav > li > a').css({
                'padding-top':'15px'
            });
            
        }
        
    });
    
    
    
});


$(document).ready(function(){
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});

$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        e.preventDefault();
    });
});

//Auto menu highlighting feature
$(document).ready(function(){
 'use strict';    
  
  $(window).scroll(function(){
    $('section').each(function(){
        'use strict';
        var bb=$(this).attr("id");
        var height=$(this).outerHeight();
        var grttop=$(this).offset().top - 70;
        
        if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + height) {            
            $(".navbar-nav li a[href='#" + bb +"']").parent().addClass("active");            
        }
        else{
            $(".navbar-nav li a[href='#" + bb +"']").parent().removeClass("active");  
             
        }
        
    });  
  });  
      
    
    
    
});

//Adding bxSlider

$(document).ready(function(){
    
    $('.slider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    });    
    
});

//counter animation
$(document).ready(function(){
    
    $('.counter-num').counterUp({
        delay:10,
        time: 2000
    });
    
});

//initilize animation object

$(document).ready(function(){
    new WOW().init();    
});



