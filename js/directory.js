const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px Chakra Pecth";
ctx.textAlign = "center";
//gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "green");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("1.0", "blue");
//fill with gradient
ctx.strokeStyle = gradient;
ctx.strokeText('Tianis Web Development', 50, 50, maxWidth);
//Navigation
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});