$(document).ready(function(){
    $(".stars").mousemove(function(event) {
        var gLeft = $(".stars .stars-ghost").offset().left,
        pX = event.pageX;
     
        $(".stars .stars-ghost").width(pX - gLeft);
     });
      var pa= $('page').text();
      alert($page);
});