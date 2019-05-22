$(document).ready(function() {
  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "linear",
    animationTime: 600,
    updateURL: false
  });
});

function init() {
  window.setTimeout(function() { start() }, 100);
}
function start() {
	$('body').removeClass("loading").addClass('loaded');	
}

$(window).load(function() {
	init();
});
