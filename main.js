$(document).ready(function () {
    $('#main-slider').slider({
        interval: 100000000000
    });

    $('#side-slider').slider({
        indicators: false
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('#scroll-box').overlayScrollbars({
         className: "os-theme-thick-dark"
    });

    //    var indicatorValues = ['Opening Video', 'Games', 'In Depth Information'];
    //    var allIndicators = $('.indicators').find($('li'));
    //
    //    $('.indicator-item').hover(function(el) {
    //
    //        var which = $(this).attr('class');
    //        if (!which.includes('active')) {
    //            for (var i = 0; i < allIndicators.length; i++) {
    //                if (allIndicators[i] === this) {
    //                    $(this).addClass('tooltipped');
    //                    $('.tooltipped').tooltip({
    //                        tooltip: indicatorValues[i],
    //                        position: top,
    //                        delay: 50
    //                    });
    //                }
    //            }
    //        }
    //    })
});
