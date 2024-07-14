
const headings = ["Truely natural", "Budget friendly", "Available in multiple size", "Aromatherapy grade"];
var random = "1"
setInterval(function () {
random = Math.floor(Math.random() * headings.length);
document.getElementById("headText").innerText = headings[random]
}, 1000);