$(document).ready(function() { 

    $(".mobile-nav-toggle").click(function() {
      $(".main-nav").toggleClass("menu-show");
      $("body").toggleClass("body-no-scroll");
      $(this).toggleClass("menu-opened");
      if ($(".mobile-nav-toggle").hasClass("menu-opened")) {
        $(this).find("span").attr("aria-expanded", "true");
      }
      else {
        $(this).find("span").attr("aria-expanded", "false");
      }
    });


    $(".tab-btn").click(function() {
      $(".tab-btn").removeClass("active");
      $(".tab").removeClass("active");
      $(".tab-img").removeClass("active");
      $(this).addClass("active");
    });

    $(".tab-btn-1").click(function() {
      $(".tab-1").addClass("active");
      $(".tab-img-1").addClass("active");
    });

    $(".tab-btn-2").click(function() {
      $(".tab-2").addClass("active");
      $(".tab-img-2").addClass("active");
    });

    $(".tab-btn-3").click(function() {
      $(".tab-3").addClass("active");
      $(".tab-img-3").addClass("active");
    });
    $(".tab-btn-4").click(function() {
      $(".tab-4").addClass("active");
      $(".tab-img-4").addClass("active");
    });


    

}); 

  