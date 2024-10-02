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


    $(".tabs-wrap button").click(function() {
      $(".tabs-wrap button").removeClass("active");
      $(".tab").removeClass("active");
      $(".planet-img").removeClass("active");
      $(this).addClass("active");
    });

    $(".tabs-wrap .button-moon").click(function() {
      $(".tab-moon").addClass("active");
      $(".planet-img-moon").addClass("active");
    });

    $(".tabs-wrap .button-mars").click(function() {
      $(".tab-mars").addClass("active");
      $(".planet-img-mars").addClass("active");
    });

    $(".tabs-wrap .button-europa").click(function() {
      $(".tab-europa").addClass("active");
      $(".planet-img-europa").addClass("active");
    });
    $(".tabs-wrap .button-titan").click(function() {
      $(".tab-titan").addClass("active");
      $(".planet-img-titan").addClass("active");
    });


}); 

  