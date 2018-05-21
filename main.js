$(document).ready(function () {
    $('.slider').slider({
        interval: 100000000000
    });

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
