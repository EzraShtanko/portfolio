var parallax_endpos_y = -400
var cur_scroll_normalized = 0.0


var mbckg = document.getElementById("main_parallax_background");
var init_mbckg_pos_y = mbckg.style.backgroundPositionY;
var parallax_span = init_mbckg_pos_y - parallax_endpos_y;


var dots = document.querySelectorAll("[id=graphic]");
// -- TODO a localized container to content correspondance for graphic
// -- elements of each individual project cover


console.log(mbckg);
console.log(dots);

document.addEventListener("scroll", (event) => {
    // parallax functionality
    // use window.scrollY to get currect scroll value

    cur_scroll_normalized = window.scrollY / document.body.scrollHeight;
    mbckg.style.backgroundPositionY = init_mbckg_pos_y + cur_scroll_normalized * parallax_span;
});