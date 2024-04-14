function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("product_title").textContent=location.href.split('#')[1].replace("_", " ").toUpperCase()
    document.getElementById("product_img").src = "./images/product/"+location.href.split('#')[1]+".jpeg";
    document.getElementById("product_description").textContent=loadFile("./product_description/"+location.href.split('#')[1]+".txt");                
  });
