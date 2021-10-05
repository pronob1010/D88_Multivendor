// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import $ from 'jquery';
// import { useEffect } from 'react';

// export default function Load(){
//     useEffect(()=>{

// $(window).on('load', function () {

//     $('.js-mega-menu').HSMegaMenu({
//         event: 'hover',
//         direction: 'horizontal',
//         pageContainer: $('.container'),
//         breakpoint: 767.98,
//         hideTimeOut: 0
//     });

//     $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
// })

// $(document).on('ready', function () {

//     $.HSCore.components.HSHeader.init($('#header'));

//     $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');

//     $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
//         afterOpen: function () {
//             $(this).find('input[type="search"]').focus();
//         }
//     });

//     $.HSCore.components.HSFancyBox.init('.js-fancybox');

//     var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
//         yearsElSelector: '.js-cd-years',
//         monthsElSelector: '.js-cd-months',
//         daysElSelector: '.js-cd-days',
//         hoursElSelector: '.js-cd-hours',
//         minutesElSelector: '.js-cd-minutes',
//         secondsElSelector: '.js-cd-seconds'
//     });

//     $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

//     $.HSCore.components.HSFocusState.init();

//     $.HSCore.components.HSValidation.init('.js-validate', {
//         rules: {
//             confirmPassword: {
//                 equalTo: '#signupPassword'
//             }
//         }
//     });

//     $.HSCore.components.HSShowAnimation.init('.js-animation-link');

//     $.HSCore.components.HSFancyBox.init('.js-fancybox');

//     $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

//     $.HSCore.components.HSGoTo.init('.js-go-to');

//     $.HSCore.components.HSHamburgers.init('#hamburgerTrigger');

//     $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
//         beforeClose: function () {
//             $('#hamburgerTrigger').removeClass('is-active');
//         },
//         afterClose: function() {
//             $('#headerSidebarList .collapse.show').collapse('hide');
//         }
//     });

//     $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
//         e.preventDefault();

//         var target = $(this).data('target');

//         if($(this).attr('aria-expanded') === "true") {
//             $(target).collapse('hide');
//         } else {
//             $(target).collapse('show');
//         }
//     });

//     $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

//     $.HSCore.components.HSSelectPicker.init('.js-select');
// });

//     })

//     return (
//         <></>
//     )
// }

$(window).on("load", function () {
  $(".js-mega-menu").HSMegaMenu({
    event: "hover",
    direction: "horizontal",
    pageContainer: $(".container"),
    breakpoint: 767.98,
    hideTimeOut: 0,
  });

  $.HSCore.components.HSSVGIngector.init(".js-svg-injector");
});

$(document).on("ready", function () {


    $('form').on('submit', function (event) {
      event.preventDefault();
    });

  $.HSCore.components.HSHeader.init($("#header"));

  $.HSCore.components.HSOnScrollAnimation.init("[data-animation]");

  $.HSCore.components.HSUnfold.init($("[data-unfold-target]"), {
    afterOpen: function () {
      $(this).find('input[type="search"]').focus();
    },
  });

  $.HSCore.components.HSFancyBox.init(".js-fancybox");

  var countdowns = $.HSCore.components.HSCountdown.init(".js-countdown", {
    yearsElSelector: ".js-cd-years",
    monthsElSelector: ".js-cd-months",
    daysElSelector: ".js-cd-days",
    hoursElSelector: ".js-cd-hours",
    minutesElSelector: ".js-cd-minutes",
    secondsElSelector: ".js-cd-seconds",
  });

  $.HSCore.components.HSMalihuScrollBar.init($(".js-scrollbar"));

  $.HSCore.components.HSFocusState.init();

  $.HSCore.components.HSValidation.init(".js-validate", {
    rules: {
      confirmPassword: {
        equalTo: "#signupPassword",
      },
    },
  });

  $.HSCore.components.HSShowAnimation.init(".js-animation-link");

  $.HSCore.components.HSFancyBox.init(".js-fancybox");

  $.HSCore.components.HSSlickCarousel.init(".js-slick-carousel");

  $.HSCore.components.HSGoTo.init(".js-go-to");

  $.HSCore.components.HSHamburgers.init("#hamburgerTrigger");

  $.HSCore.components.HSUnfold.init($("[data-unfold-target]"), {
    beforeClose: function () {
      $("#hamburgerTrigger").removeClass("is-active");
    },
    afterClose: function () {
      $("#headerSidebarList .collapse.show").collapse("hide");
    },
  });

  $('#headerSidebarList [data-toggle="collapse"]').on("click", function (e) {
    e.preventDefault();

    var target = $(this).data("target");

    if ($(this).attr("aria-expanded") === "true") {
      $(target).collapse("hide");
    } else {
      $(target).collapse("show");
    }
  });

  $.HSCore.components.HSUnfold.init($("[data-unfold-target]"));

  $.HSCore.components.HSSelectPicker.init(".js-select");
});
