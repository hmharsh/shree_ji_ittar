productUrlMap.forEach(function(item){
    if (window.location.hash.endsWith(item.name)){
        // window.location.href = "https://shreejiittar.mini.store/products/"+item.id;
        window.open("https://shreejiittar.mini.store/products/"+item.id, "_blank");
    }
})
