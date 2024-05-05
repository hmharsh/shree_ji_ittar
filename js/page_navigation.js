productUrlMap.forEach(function(item){
    if (window.location.hash.endsWith(item.name)){
        window.location.hash = "https://shreejiittar.mini.store/products/"+item.id;
    }
})
