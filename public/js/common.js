$(".header_menu").click(function() {
    $(".header_nav").toggleClass("active");
})

$(".header_lang_active").click(function() {
    $(this).parents(".header_lang").find("ul").slideToggle(300);
})
$(document).click(function (event) {
    var lang = $(".header_lang");
    if (!lang.is(event.target) && lang.has(event.target).length === 0) {
        $(".header_lang").find("ul").slideUp(300);
    }
});