$(function() {
  $('#searchChannel').focusin(function() {
    $(this).css('background-color', 'black');
  });
  $('#searchChannel').focusout(function() {
    $(this).css('background-color', '#313031');
  });
});