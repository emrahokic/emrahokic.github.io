$(document).ready(function(){
        var navHeight = $('nav').outerHeight();
	$('.page-scroll').click(function(){
        var linkHref = $(this).attr('href');
        //var headerHeight=$('href')
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - navHeight
        }, 1000);

        e.preventDefault();
	});
	$(".naslov1").fitText(1, { minFontSize: '10px', maxFontSize: '55px' });
	$(".naslov2").fitText(1, { minFontSize: '10px', maxFontSize: '45px' });
	$(".naslov3").fitText(1, { minFontSize: '5px', maxFontSize: '25px' });
	 $(".naslov4").fitText(1, { minFontSize: '5px', maxFontSize: '20px' });
	 
	 
});

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );