var parallax_endpos_y = -30
var current_scroll = 0.0


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
// TODO
});