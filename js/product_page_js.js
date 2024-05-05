// Identify product_type
product_type=undefined
if (window.location.hash.includes("_cooler_perfume")) {
    product_type = "cooler_perfume";
  } else if (window.location.hash.includes("_perfume")) {
    product_type = "perfume";
  } else if (window.location.hash.includes("_ittar")) {
    product_type = "ittar";
  } else if (window.location.hash.includes("_rollon")) {
    product_type = "rollon";
  }  else if (window.location.hash.includes("_combo")) {
    product_type = "combo";
  }
// alert(product_type)

// Read product description
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

// Load and assign product details
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("product_title").textContent=location.href.split('#')[1].replaceAll("_", " ").toUpperCase()
  document.getElementById("product_img").src = "./images/product/"+location.href.split('#')[1]+".jpeg";
  document.getElementById("product_description").textContent=loadFile("./product_description/"+location.href.split('#')[1]+".txt");                
});
