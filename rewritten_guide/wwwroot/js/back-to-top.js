$(document).on("scroll", function() {
    if($(document).scrollTop() > window.innerHeight) {
        $("#backtotop-link").addClass("show");
    } else {
        $("#backtotop-link").removeClass("show");
    }
});