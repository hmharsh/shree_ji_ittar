productUrlMap.forEach(function(item){
    if (window.location.hash.endsWith(item.name)){
        window.location.url = "https://shreejiittar.mini.store/products/"+item.id;
    }
})
