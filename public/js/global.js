$(function() {
    $('[data-toggle="popover"]').popover({
        html: true,
        title: function() {
            return $(this).next().find('.popover-head').html();
        },
        content: function() {
            return $(this).next().find('.popover-content').html();
        }
    });
    $('[id^="item"]').on('shown.bs.popover', function() {
        var itemPos = parseInt($(this).offset().top);

        var absPos = itemPos - 70;
        $('.popover.left .arrow').css('top', absPos + 'px');
    });

    $('[data-toggle="popover"]').on('click', function(e) {
        $('[data-toggle="popover"]').not(this).popover('hide');
    });
});
