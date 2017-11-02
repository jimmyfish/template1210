$(function() {

    var showPopover = $.fn.popover.Constructor.prototype.show;
    $.fn.popover.Constructor.prototype.show = function() {
        showPopover.call(this);
        if (this.options.showCallback) {
            this.options.showCallback.call(this);
        }
    }

    var itemData = $('[id^="item"]');

    itemData.popover({
            html: true,
            title: function() {
                return $(this).next().find('.popover-head').html();
            },
            content: function() {
                return $(this).next().find('.popover-content').html();
            },
            showCallback: function() {

                // $(".popover-content select").select2({
                //     containerCss: {
                //         "display": "block"
                //     },
                //     minimumResultsForSearch: -1
                // });
            },
        })
        .on('shown.bs.popover', function() {
            var itemPos = parseInt($(this).offset().top);

            var absPos = itemPos - 70;
            $('.popover.left .arrow').css('top', absPos + 'px');
        })
        .on('click', function(e) {
            e.preventDefault();
            $('[data-toggle="popover"]').not(this).popover('hide');
        });

    $('.slider-inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    var sliderTestimonial = $('#testimonial');

    sliderTestimonial.on('slide.bs.carousel', function(e) {
        var itemActiveIdentity = sliderTestimonial.find('.item.active').find('.identity'),
            idName = itemActiveIdentity.find('.name').text(),
            idImg = itemActiveIdentity.find('img').attr('src'),
            testimonialId = $('.testimonial-identity');

        $('.testimonial-identity .name-cont .name').text(idName);
        $('.testimonial-identity .img-cont img').attr('src', idImg);
    });

    var newsItem = $('#news-flash'),
        itemLen = newsItem.find('.item').length,
        activeItem = newsItem.
        i = 0;

    console.log(itemLen);

    newsItem.each(function() {

    });
});
