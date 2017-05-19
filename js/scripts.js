// Hide navigation on page load
$('.nav-info').hide();

// Toggle menu on and off
$('.nav-icon').on('click', function() {
  $('.nav-info').slideToggle(280);
});