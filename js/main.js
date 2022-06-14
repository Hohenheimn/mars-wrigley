
    window.onbeforeunload = function () {
        $('body').hide();
        window.scrollTo(0, 0);
    };

    $('#btn-back-to-top').click(
      function () {
        $('html,body').animate({
          scrollTop: 0
        }, 1000)
    });

    var header = $('.header-container');
    var lastScrollTop = 0;
    
	
    $(window).scroll(function(){
        var yPos = $(this).scrollTop();

        if(yPos > $('.main-header').outerHeight() - 16) {
            header.addClass('sticky');
            $(".hamburger-menu.active").addClass("stickMenu");
          
        } else {
            header.removeClass('sticky');
            $(".hamburger-menu.active").removeClass("stickMenu");
        }
        lastScrollTop = yPos;
    });
