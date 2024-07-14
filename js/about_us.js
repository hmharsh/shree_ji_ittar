const audio_english = new Audio("./mp3/english.mp3");
const audio_hindi = new Audio("./mp3/hindi.mp3");
function isPlaying(audelem) { return !audelem.paused; }


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("speak_in_english").onclick = function(){
    if(!audio_hindi.paused) {
        audio_hindi.pause()
        document.getElementById("speak_in_hindi").innerHTML="<u>Hindi</u>"
    }
    if(!audio_english.paused) {
       audio_english.pause()
       document.getElementById("speak_in_english").innerHTML="<u>English</u>"
    } else {
        audio_english.play();
        document.getElementById("speak_in_english").innerHTML="<u>⏯️ Pause</u>"
    } 
  };
  document.getElementById("speak_in_hindi").onclick = function(){
    if(!audio_english.paused) {
        audio_english.pause()
        document.getElementById("speak_in_english").innerHTML="<u>English</u>"
     }
    if(!audio_hindi.paused) {
        audio_hindi.pause()
        document.getElementById("speak_in_hindi").innerHTML="<u>Hindi</u>"
     } else {
         audio_hindi.play();
         document.getElementById("speak_in_hindi").innerHTML="<u>⏯️ Pause</u>"
     } 
  }
})