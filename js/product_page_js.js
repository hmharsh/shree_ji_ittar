// On image click
function swapImg(i){
  console.log(document.getElementById("product_img"))
  let tmpImg =  document.getElementById("product_img").getAttribute('src'); // Current main imaget
  document.getElementById("product_img").src = document.getElementById("additionalImg"+i).getAttribute('src');
  document.getElementById("additionalImg"+i).src=tmpImg
}

function addExtraImages(productType){
  document.getElementById("additionalImg1").src = "./images/additional/"+productType+"/1.jpeg";
  document.getElementById("additionalImg2").src = "./images/additional/"+productType+"/2.jpeg";
  document.getElementById("additionalImg3").src = "./images/additional/"+productType+"/3.jpeg";
}
function populateSizetable(sizePriceMap){
     var row = document.getElementById("size_price_table").insertRow();
     for (const [key, value] of Object.entries(sizePriceMap)) {
        row.insertCell().textContent = `${key}`
        row.insertCell().textContent = `₹${value}`
      }
}


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
  product_name="N/A"
  if (window.location.href.split('?')[1].split('=')[0] ==  "product_name"){
    product_name=window.location.href.split('?')[1].split('=')[1]
    document.title = product_name.replaceAll("_", " ").toUpperCase() + " || Shree Ji Ittar"
  }

  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("product_title").textContent=product_name.replaceAll("_", " ").toUpperCase()
  document.getElementById("product_img").src = "./images/product/"+product_name+".jpeg";


  // Identify product_type
  product_type=undefined
  if (product_name.includes("_cooler_perfume")) {
      product_type = "cooler_perfume";
      if (["#khus_cooler_perfume"].includes(product_name)){
        ([{"5ml": "140"}]).forEach(populateSizetable)
      } else {
        ([{"5ml": "80"}]).forEach(populateSizetable)
      }
    } else if (product_name.includes("_combo")) {
      product_type = "combo";
      ([{"6ml each": "380"}]).forEach(populateSizetable)
    } else if (product_name.includes("_perfume")) {
      product_type = "perfume";
      ([{"8ml pocket friendly": "80"}, {"10ml like pencil": "80"}]).forEach(populateSizetable)
    } else if (product_name.includes("_ittar")) {
      product_type = "ittar";
      if (["#kesar_chandan_ittar", "#champa_chameli_ittar", "#kesar_gulab_ittar", "#kesar_gulab_chandan_ittar", "#kesar_mogra_chandan_ittar", "#kesar_mogra_ittar", "#khus_cooler_perfume", "#chandan_cooler_perfume", "#kaweda_chandan_ittar"].includes(product_name)){
        ([{"2ml": "50"},{"3ml": "70"},{"5ml-dropper": "80"}, {"6ml": "100"}, {"12ml": "150"} ]).forEach(populateSizetable)
      } else if (["#khus_ittar", "#kesar_ittar"].includes(product_name)) {
        ([{"2ml": "50"},{"3ml": "70"},{"5ml-dropper": "120"}, {"6ml": "120"}, {"12ml": "200"} ]).forEach(populateSizetable)
      } else {
        ([{"2ml": "40"},{"3ml": "50"},{"5ml-dropper": "80"}, {"6ml": "80"}, {"12ml": "120"} ]).forEach(populateSizetable)
      }
    } else if (product_name.includes("_rollon")) {
      product_type = "rollon";
      ([{"2ml": "40"},{"3ml": "50"}, {"6ml": "80"}, {"12ml": "120"} ]).forEach(populateSizetable)
    }
     else {
        alert("Product not found: possibly the link you clicked on is not working, redirecting to our online mini store, please try to search product there")
        window.location = "https://shreejiittar.mini.store"
    }
    addExtraImages(product_type)
    
    // Load description
    document.getElementById("product_description").textContent=loadFile("./product_description/"+product_name+".txt");
});
