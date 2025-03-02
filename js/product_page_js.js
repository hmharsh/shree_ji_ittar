// On image click
function swapImg(i){
  console.log(document.getElementById("product_img"))
  let tmpImg =  document.getElementById("product_img").getAttribute('src'); // Current main imaget
  document.getElementById("product_img").src = document.getElementById("additionalImg"+i).getAttribute('src');
  document.getElementById("additionalImg"+i).src=tmpImg
}

function addExtraImages(productType){
  document.getElementById("additionalImg1").src = "./images/additional/"+productType+"/1.jpg";
  document.getElementById("additionalImg2").src = "./images/additional/"+productType+"/2.jpg";
  document.getElementById("additionalImg3").src = "./images/additional/"+productType+"/3.jpg";
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
    if (product_name.includes('&')){
      product_name=product_name.split('&')[0]
    }
    document.getElementById("head_link").setAttribute("href", "https://shreejiittar.in/product.html?product_name="+product_name);
    document.title = product_name.replaceAll("_", " ").toUpperCase() + " | Shree Ji Ittar"
  }
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("product_title").textContent=product_name.replaceAll("_", " ").toUpperCase()
    document.getElementById("product_path").textContent=product_name.replaceAll("_", " ").toUpperCase()
    document.getElementById("product_img").src = "./images/product/"+product_name+".jpg";
    document.getElementById("shareBtn").setAttribute("data-a2a-url", window.location.href.toString())

  // Identify product_type
  product_type=undefined
  if (product_name.includes("_cooler_perfume")) {
      product_type = "cooler_perfume";
      if (["#khus_cooler_perfume"].includes(product_name)){
        ([{"5ml": "140"}]).forEach(populateSizetable)
      } else {
        ([{"5ml": "80"}]).forEach(populateSizetable)
      }
    } else if (product_name.includes("_comboo")) {
      product_type = "comboo";
      ([{"6ml each": "250"}]).forEach(populateSizetable)
    } else if (product_name.includes("ittar_combo_2ml_each_pack_of_4")) {
      product_type = "ittar_combo";
      ([{"6ml each": "140"}]).forEach(populateSizetable)
    } else if (product_name.includes("ittar_combo_6ml_each_pack_of_4")) {
      product_type = "ittar_combo";
      ([{"6ml each": "280"}]).forEach(populateSizetable)
    } else if (product_name.includes("ittar_combo_6ml_each_pack_of_5")) {
      product_type = "ittar_combo";
      ([{"6ml each": "320"}]).forEach(populateSizetable)
    }
    else if (product_name.includes("_perfume")) {
      product_type = "perfume";
      ([{"8ml": "50"}, {"20ml": "100"}]).forEach(populateSizetable)
    } else if (product_name.includes("_ittar")) {
      product_type = "ittar";
      if (["#for_future"].includes(product_name)){
        ([{"2ml": "85"},{"3ml": "100"},{"5ml-dropper": "120"}, {"6ml": "120"}, {"12ml": "180"} ]).forEach(populateSizetable)
      } else if (product_name == "khus_ittar") {
        ([{"2ml": "80"},{"3ml": "120"},{"5ml-dropper": "180"}, {"6ml": "220"}, {"12ml": "400"} ]).forEach(populateSizetable)
      } else {
        ([{"2ml": "30"},{"3ml": "40"},{"5ml-dropper": "50"}, {"6ml": "60"}, {"12ml": "100"} ]).forEach(populateSizetable)
      }
    } else if (product_name.includes("_rollon")) {
      product_type = "rollon";
      ([{"2ml": "85"},{"3ml": "100"}, {"6ml": "120"}, {"12ml": "180"} ]).forEach(populateSizetable)
    }
     else {
        alert("Product not found: possibly the link you clicked on is not working, redirecting to our online mini store, please try to search product there")
        window.location = "https://shreejiittar.mini.store"
    }
    addExtraImages(product_type)
    // Load description
    document.getElementById("product_description").textContent=loadFile("./product_description/"+product_name+".txt");
});



