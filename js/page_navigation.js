productUrlMap.forEach(function(item){
    if (window.location.hash.endsWith(item.name)){
        console.log(item)
        // window.location.href = "https://shreejiittar.mini.store/products/"+item.id;
    }
})
