$(function(){
  $('.iphone, .app-btn').on('mouseover', function(){
    $('.sun').addClass('zoom');
  })

  $('.iphone, .app-btn').on('mouseleave', function(){
    $('.sun').removeClass('zoom');
  })

});
