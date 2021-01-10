(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });
  
  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-angle-right').removeClass('ti-angle-right').addClass('ti-angle-down');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-angle-down').removeClass('ti-angle-down').addClass('ti-angle-right');
  });

  
	//slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
  });
  
  

})(jQuery);

/*!
 * JavaScript functions for use in event pages. 
 */

/*
 * toggleAbstract toggles the visibility of the abstract of a presentation on
 * agenda pages of InnerSource events.
 */
function toggleAbstract(elementId) {
  var a = document.getElementById(elementId);
  var aLink = document.getElementById(elementId + "-link");
  if (a.style.display == "none") {
      a.style.display = "block";
      aLink.text = "Hide Abstract";
  } else {
      a.style.display = "none";
      aLink.text = "Show Abstract";
  }
}