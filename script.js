$(function() {
  $('.member-hover').hover(
    function(){
      $(this).find('.text-contents').addClass('text-active');
    },
    function(){
      $(this).find('.text-contents').removeClass('text-active');
    }
  )
});