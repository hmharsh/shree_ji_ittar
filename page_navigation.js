const productUrlMap = [
    {name: "champa", id: "48900006-7bf3-4399-a1bf-0538bb09340f"},
    {name: "laung", id: "6bb56535-c223-41fb-9a47-87750d868f4a"},
    {name: "kesar", id: "302591e5-7e0a-432c-a8ff-be85d26a5708"},
    {name: "lavender", id: "ac1beada-8dc9-4d94-a2b3-b19ce3828961"},
    {name: "kaveda", id: "eb3b6ed7-0e66-4396-8227-5c039f141778"},
    {name: "chameli", id: "500855ac-5b40-4d15-9277-0e5239921760"},
    {name: "gulab", id: "0b84bc8c-af17-4feb-8164-384c8077ca8e"},
    {name: "bulgariya_gulab", id: "fa390c8f-62b8-407f-9ee1-0b75eb4be30d"},
    {name: "shahi_gulab", id: "3c77fcd0-3797-45da-af42-f6b64afe42e7"},
    {name: "mahendi", id: "9dd5149f-b98d-403a-b5d0-d94542b69ed4"},
    {name: "mogra", id: "a44aa6f7-4aaf-4f79-87dd-6999100213d9"},
    {name: "chandan", id: "3396cbf2-6fc2-4a3e-9f30-894189a75013"},
    {name: "khus", id: "4db0ac16-5ce4-438f-a924-d15445fe1802"},
    {name: "lotus", id: "da98812c-d5f2-40a6-bfbc-dc2d31a3117e"},
    {name: "cool_water", id: "f0c6c89d-2745-43f1-a267-2c11de50ba6f"},
    {name: "geeli_mitti", id: "da89ccfd-f9e9-469b-b34d-54ae436db465"},
    
]

productUrlMap.forEach(function(item){
    if (window.location.href.endsWith(item.name)){
        window.location.href = "https://shreejiittar.mini.store/products/"+item.id;
    }
})
