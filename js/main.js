$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
 ;
 $(document).ready(function () {
  // Custom
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    } else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height("auto");
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $("<div>").addClass("sticky-wrapper"); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass("sticky");

    // Scroll & resize events
    $(window).on(
      "scroll.sticky-onscroll resize.sticky-onscroll",
      function () {
        stickyToggle(sticky, stickyWrapper, $(this));
      }
    );

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
}); 
 /* 1 carousel */
 $('#carousel-1').carousel({
  interval: 4000,
  wrap: true,
  keyboard: true
});


/* 2 carousel */
$('#carousel-2').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});


/* 3 carousel */
$('#carousel-3').carousel({
 interval: 8000,
 wrap: true,
 keyboard: true
});

/* 4 carousel example with jumbotron */
$('#carousel-4').carousel({
 interval: 10000,
 wrap: true,
 keyboard: true
});

/* 5 carousel example */
$('#carousel-5').carousel({
 interval: 6000,
 wrap: true,
 keyboard: true
});

/* 6 carousel example */
$('#carousel-6').carousel({
 interval: 8000,
 wrap: true,
 keyboard: true
});

/* 7 carousel example */
$('#carousel-7').carousel({
 interval: 4000,
 wrap: true,
 keyboard: true
});

/* 8 carousel example */
$('#carousel-8').carousel({
 interval: 6000,
 wrap: true,
 keyboard: true
});

/* 9 carousel example */
$('#carousel-9').carousel({
 interval: 8000,
 wrap: true,
 keyboard: true
});

/* 10 carousel example */
$('#carousel-10').carousel({
 interval: 2000,
 wrap: true,
 keyboard: true
});

/* 11 carousel example */
$('#carousel-11').carousel({
 interval: 4000,
 wrap: true,
 keyboard: true
});

/* 12 carousel example */
$('#carousel-12').carousel({
 interval: 6000,
 wrap: true,
 keyboard: true
});

/* 13 carousel example */
$('#carousel-13').carousel({
 interval: 8000,
 wrap: true,
 keyboard: true
});