! function (e) {
  "use strict";
  jQuery(document).on("ready", function () {
    e("a.smooth-scroll").on("click", function (a) {
      var t = e(this);
      e("html, body").stop().animate({
        scrollTop: e(t.attr("href")).offset().top - 0
      }, 1200, "easeInOutExpo"), a.preventDefault()
    }), e("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195
    }), e(".testimonilas-active").owlCarousel({
      loop: !0,
      margin: 0,
      center: !0,
      mouseDrag: !0,
      autoplay: !0,
      responsive: {
        210: {
          items: 1
        },
        320: {
          items: 1
        },
        479: {
          items: 1,
          center: !1
        },
        768: {
          items: 2,
          center: !1
        },
        980: {
          items: 3
        },
        1199: {
          items: 3
        }
      }
    }), e(".brand-product-active").owlCarousel({
      loop: !0,
      margin: 10,
      mouseDrag: !0,
      autoplay: !0,
      responsive: {
        210: {
          items: 1
        },
        320: {
          items: 2
        },
        479: {
          items: 2
        },
        768: {
          items: 3
        },
        980: {
          items: 4
        },
        1199: {
          items: 5
        }
      }
    });
    new Swiper(".s1", {
      effect: "coverflow",
      loop: !0,
      slidesPerView: "auto",
      grabCursor: !1,
      parallax: !0,
      centeredSlides: !0,
      coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: !1
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: !0
      }
    });
//    e(window).on("scroll", function () {
//      e(window).scrollTop() < 70 ? e(".site-header").removeClass("sticky") : e(".site-header").addClass("sticky")
//    }), 
	  e(function () {
      function a(a, t) {
        a.each(function () {
          var a = e(this),
            o = a.attr("data-animation"),
            i = a.attr("data-animation-delay");
          a.css({
            "-webkit-animation-delay": i,
            "-moz-animation-delay": i,
            "animation-delay": i
          }), (t || a).waypoint(function () {
            a.addClass("animated").css("visibility", "visible"), a.addClass("animated").addClass(o)
          }, {
            triggerOnce: !0,
            offset: "90%"
          })
        })
      }
      a(e(".animation")), a(e(".staggered-animation"), e(".staggered-animation-wrap"))
    }), e.scrollUp({
      scrollText: '<i class="icofont icofont-swoosh-up"></i>'
    }), e(".counter").counterUp({
      delay: 10,
      time: 1e3
    }), e(".navbar-toggler").on("click", function () {
      e(".navbar-toggler").toggleClass("cg")
    }), e(".main-menu ul > li.nav-item > a.nav-link").on("click", function () {
      e(".navbar-collapse").removeClass("show"), e(".navbar-toggler").removeClass("cg")
    }), e('[data-toggle="tooltip"]').tooltip(), e(".player").mb_YTPlayer(), e(".video-pop").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade"
    })
  });
	
//	show the searching potion
	$('.search-bill').on('click', function(){
		$('.search-container').removeClass('d-none');
	});
	$('.close-search').on('click', function(){
		$('.search-container').addClass('d-none');
	});
	
//	transactions slider
	
	$('.history-click').on('click', function(){
		$('.trasactions-side-container').removeClass('d-none');
		
	});
	$('.trans-header .close').on('click', function(){
		$('.trasactions-side-container').addClass('d-none');
	});
	
	//	payment methods
	
	$('.payment-header li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');		
	});
	
	$('.pay-mpesa').on('click', function(){
		$('#mpesa-payment').removeClass('d-none').siblings('.payment-image').addClass('d-none');
		$('.mpesa-form').removeClass('d-none').siblings('form').addClass('d-none');	
		$('.otp-btn').addClass('d-none');
	});
	
	$('.pay-cash').on('click', function(){
		$('#cash-payment').removeClass('d-none').siblings('.payment-image').addClass('d-none');
		$('.cash-form').removeClass('d-none').siblings('form').addClass('d-none');	
		$('.otp-btn').removeClass('d-none');
	});
	
	$('.pay-combine').on('click', function(){
		$('#combined-payment').removeClass('d-none').siblings('.payment-image').addClass('d-none');
		$('.combine-form').removeClass('d-none').siblings('form').addClass('d-none');
		$('.otp-btn').removeClass('d-none');
	});
	
	function mpesaload(){
		$('#mpesa-payment').removeClass('d-none');
	}
	
	setTimeout(mpesaload,400);
	
	$('.mpesa-btn').on('click', function(){
		event.preventDefault();
		showloader();
		setTimeout(function(){
			success_mpesa();
		},5000)
	});
	
	function showloader(){
		$('.loader-container').removeClass('d-none');
	}
	
	function hideloader(){
		$('.loader-container').addClass('d-none');
	}
	
	function hideBubbles(){
		$('.loader-bubble').addClass('d-none');
	}
	
//	successful mpesa transaction
	
	function success_mpesa(){
		hideBubbles();
		$('.msg-success').removeClass('d-none');
		$('.msg-unsuccess').addClass('d-none');
	}
	
//	unsuccesful mpesa transaction
	
	
	function unsuccesful_mpesa(){
		hideBubbles();
		$('.msg-unsuccess').removeClass('d-none');
		$('.msg-success').addClass('d-none');
	}
	
	// close msg pop up
	$('.msg-success button').on('click', function(){
		location.reload();
	});
	
	
	
	//	payment method
	
	
	//	transactions page stylings
	$('.table-nav li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		var title=$(this).text();
		var ind=$(this).index();

		
		$('.transactions-container h2').text(title);
		$('.transactions-tables').children().eq(ind).removeClass('d-none').siblings().addClass('d-none');
	});
		
	//	transactions page stylings
	
	

	
	
	
}(jQuery);
//# sourceMappingURL=app.js.map
