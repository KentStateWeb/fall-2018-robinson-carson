/* ------------- Smooth Scrolling --------------- */
/* Once the document is ready, then run this* function. */
$(document).ready(function() {
  /* Var was created in js called "scrollLink" and the class scroll is assigned to all sections. */
  var scrollLink = $('.scroll');
  // Smooth scrolling
  /* When the user clicks there is an event happening... */
  scrollLink.click(function(event) {
    /* Ignore the default event, which is to jump to the section of the page. */
    event.preventDefault();
    /* Ask jQuery to grab the body and HTML elements and animate them. */
    $('body,html').animate({
      /* scrollTop: measuring where the scroll bar is on the page -- this.hash = "this id" or "this section"
      --> find the upper left corner of the document --> and set the to the top of the window. (???)*/
      scrollTop: $(this.hash).offset().top
      /* the speed of the will be 1000ms = 1s */
    }, 1000 );
  });
});


$(document).ready(function(){
    $(".navbutton").click(function(){
        $("#navitems").fadeToggle();

    });
});
