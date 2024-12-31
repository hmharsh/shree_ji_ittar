
const headings = ["Shree Ji Ittar", "श्रीजी इत्र"];
var random = "1"
setInterval(function () {
random = Math.floor(Math.random() * headings.length);
document.getElementById("headText").innerText = headings[random]
}, 1500);
