productUrlMap.forEach(function(item){
    if (window.location.hash.endsWith(item.name)){
        const timestamp = new Date().getTime();
        const currentUrl = "https://shreejiittar.mini.store/products/"+item.id;
        const newUrl = currentUrl.includes('?') ? `${currentUrl}&t=${timestamp}` : `${currentUrl}?t=${timestamp}`;
        window.location.href = newUrl;
        //window.open("https://shreejiittar.mini.store/products/"+item.id, "_blank");
    }
})
