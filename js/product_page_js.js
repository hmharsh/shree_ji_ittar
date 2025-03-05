// product_img
document.addEventListener('DOMContentLoaded', function() {
  imageSwipeFunc();
});

function imageSwipeFunc(){
const touchableElement = document.getElementById("product_img")
touchableElement.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;
}, false);
touchableElement.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;
  handleGesture();
}, false);
function handleGesture() {
  if (touchendX < touchstartX) {
      console.log('Swiped Left');
      let tempImg = document.getElementById("product_img").src
      document.getElementById("product_img").src = document.getElementById("additionalImg3").src
      document.getElementById("additionalImg3").src = document.getElementById("additionalImg2").src
      document.getElementById("additionalImg2").src = document.getElementById("additionalImg1").src
      document.getElementById("additionalImg1").src = tempImg

  }
  if (touchendX > touchstartX) {
      console.log('Swiped Right');
      let tempImg = document.getElementById("product_img").src
      document.getElementById("product_img").src = document.getElementById("additionalImg1").src
      document.getElementById("additionalImg1").src = document.getElementById("additionalImg2").src
      document.getElementById("additionalImg2").src = document.getElementById("additionalImg3").src
      document.getElementById("additionalImg3").src = tempImg
  }
  if (touchendY === touchstartY) {
      console.log('Tap');
  }
}
}


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
      ([{"8ml": "60"}, {"20ml": "120"}]).forEach(populateSizetable)
    } else if (product_name.includes("_ittar")) {
      product_type = "ittar";
      if (["#for_future"].includes(product_name)){
        ([{"2ml": "85"},{"3ml": "100"},{"5ml-dropper": "120"}, {"6ml": "120"}, {"12ml": "180"} ]).forEach(populateSizetable)
      } else if (product_name == "khus_ittar") {
        ([{"2ml": "80"},{"3ml": "100"},{"5ml-dropper": "120"}, {"6ml": "120"}, {"12ml": "200"} ]).forEach(populateSizetable)
      } else {
        ([{"2ml": "40"},{"3ml": "50"},{"5ml-dropper": "80"}, {"6ml": "80"}, {"12ml": "120"} ]).forEach(populateSizetable)
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

