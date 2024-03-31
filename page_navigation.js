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
    {name: "cherry_fragrance_spray_perfume",id: "0035d83a-cb1f-4176-b733-3b4e1d6289c5"},
    {name: "oud_ittar",id: "0cf8977f-0dff-420b-b0d5-16278386146d"},
    {name: "talcum_powder_fragrance",id: "0d9d4909-188a-4781-9eb2-eeb762c2ffe4"},
    {name: "1881_fragrance_spray_perfume",id: "17c41ba8-0d5b-46e7-875d-9667ea0a380c"},
    {name: "bubblegum_or_boomer_fragrance_spray_perfume",id: "1b2ace28-f713-43e8-b9b7-c5050eabf6ab"},
    {name: "emir_fragrance_spray_perfume",id: "1e4c025f-d260-4665-b4c7-076b3cc41b52"},
    {name: "lemon_fragrance_spray_perfume",id: "29c5e3a1-a7ef-4dae-99a9-1c218cdcfff0"},
    {name: "cool_water_spray_perfume",id: "358075cb-dda6-4c20-a673-1ec65c4b8957"},
    {name: "ice_berg_fragrance_spray_perfume",id: "38d1e3d0-8232-4683-8b1c-85820d711177"},
    {name: "amber_ittar",id: "40e2cea1-7bbe-4e25-8845-f336a317f04a"},
    {name: "blossom_spray_perfume",id: "45eeb632-58d9-4fa8-a8ed-4a69dec66bcf"},
    {name: "mogra_spray_perfume",id: "4ab4528f-e331-4005-b757-bbe11203192e"},
    {name: "lavender_fragrance_spray_perfume",id: "5599facf-ee0f-4ec4-8a74-47b0616eb4a2"},
    {name: "dalchini_or_cinnamon_ittar",id: "5d558346-a6f2-4212-abe1-cdaae8cbe5ae"},
    {name: "mysore_sandal_soap_spray_perfume",id: "5edca1cb-ba15-44aa-aa32-bb2148005b08"},
    {name: "magnet_fragrance_perfume_spray",id: "604b93d7-4a19-452b-a0ef-dc1bcacb4b7b"},
    {name: "misfit_fragrance_spray_perfume",id: "6748eaf5-4d7c-4725-8d7b-daae2b45e476"},
    {name: "geeli_mitti_spray_perfume",id: "675ddd69-e536-4eb1-82c6-0e634ea433a4"},
    {name: "coffee_fragrance_spray_perfume",id: "725fbb39-257b-40b2-a4f3-34af845c8a8d"},
    {name: "chocolatey_fragrance_spray_perfume",id: "72a2c8dc-a7b5-4f8b-9d05-398cb8b33837"},
    {name: "kesar_chandan_spray_perfume",id: "7acdec62-1afe-4352-a737-ed47a8ac5a02"},
    {name: "rajnigandha_fragrance_spray_perfume",id: "7f132c0d-0bc8-46ae-86eb-b7139645b48b"},
    {name: "black_xs_fragrance_spray_perfume",id: "891434be-a2b2-4487-a0df-5a1981e506ff"},
    {name: "kastoori_or_musk_ittar",id: "8dd4a847-2cd4-40fb-a270-ad62c69c9389"},
    {name: "grape_fruit_fragrance_spray_perfume",id: "9fa2b2c1-6fde-443c-a706-ad4a81e08d6b"},
    {name: "tuscan_lather_spray_perfume",id: "a5da3c2d-220f-49cf-a468-bf181a2a1ee8"},
    {name: "black_current_fragrance_spray_perfume",id: "a829dac1-a063-450b-b5c0-1a9ed86230c2"},
    {name: "ylang_ylang_spray_perfume",id: "a8370357-c77e-4757-9479-52de82f73ef7"},
    {name: "saffron_spray_perfume", id: "f157f297-6adb-41f3-8009-05a09026ccbf"},
    {name: "cranberry_fragrance_spray_perfume",id: "aaeacf8d-6bc4-41eb-a79e-1157c167231f"},
    {name: "aqua_fresh_spray_perfume",id: "ab244ab9-2121-4268-b24b-b9688427b706"},
    {name: "belpatra_spray_perfume",id: "b23b87d9-342d-458e-8760-7e8023fb309a"},
    {name: "kapoor_or_camphor_ittar",id: "c8687798-ba9d-44b5-9bbb-f914d0bafd90"},
    {name: "citronella_roll-on",id: "c8765836-bc43-42b1-ba9a-4e2134238c43"},
    {name: "vanilla_spray_perfume",id: "cb8b5c59-b772-46f7-887d-884a99129b53"},
    {name: "peppermint_fragrance_ittar",id: "cc20d137-ec1d-4e21-9d50-9f1e71644c9d"},
    {name: "pineapple_fragrance_spray_perfume",id: "d08ee348-5e16-4aaa-a97d-0464a0665c27"},
    {name: "kesar_chandan_ittar",id: "d7fe632b-f8f4-4f00-96c7-4b2124e3db33"},
    {name: "savage_fragrance_spray_perfume",id: "dad57485-d183-4e09-ae54-f17811102e7f"},
    {name: "champa_chameli_spray_perfume",id: "dec942a3-0e85-4373-8c57-07e26f517621"},
    {name: "blue_fragrance_spray_perfume",id: "e0621d06-2c02-4b17-b100-8673d3b37561"},
    {name: "kesar_gulab_ittar",id: "e06f558c-c544-4046-bc19-692763c3d680"},
    {name: "rajanigandha_ittar",id: "e12acd72-9bbb-4b35-bf45-3af09dd7e7cc"},
    {name: "kaweda_or_kewra_or_kaveda_spray_perfume",id: "e29856f7-547d-4d27-9161-a7a82a47c7ec"},
    {name: "orange_fragrance_spray_perfume",id: "e38e4ffc-f3f7-4804-9c8b-da3632b6b198"},
    {name: "belpatra_ittar",id: "e908cff1-e1af-487f-bf66-50958c670aeb"},
    {name: "champa_chameli_ittar",id: "ed9d087b-fd0d-41e1-aac5-c62c420fbe97"},
    {name: "kesar_gulab_spray_perfume",id: "fd1b4a2e-3c51-4b08-b958-fffa3ab4a0a1"},
    {name: "aqua_ittar",id: "8fda1ec6-4957-4278-a267-9622907eda4b"},
    {name: "boss_ittar",id: "f035ddec-8983-48b2-b35f-e773eafbcada"},
    {name: "guilty_ittar",id: "89ca7a40-853a-4f81-8e5a-c5193c71aa34"},
    {name: "black_xs_ittar",id: "40d6311d-01a0-4a5f-9703-e3505704e3c6"},
    {name: "cr7_ittar",id: "03406492-02bf-451f-a409-44063c320f17"},
    {name: "emir_ittar",id: "21d83045-ba56-4c54-abc7-ab10a0d2a1bc"},
    {name: "signature_ittar",id: "1260db77-be49-45a7-9618-65a086032b67"},
    {name: "infinity_ittar",id: "e2f1f0d1-1ccf-4e8d-a59b-e9510edccf11"},
    {name: "tuscan_lather",id: "d8fd2d15-d87f-417b-b9bd-a2316592b501"},
    {name: "sleep_roll_on",id: "ce86a287-d741-4fbe-ac3b-391076ee8fac"},
    {name: "focus_boost_roll_on",id: "929ab7c7-48d1-442a-92d6-9cc60e378e28"},
    {name: "pain_killer_rollon", id: "0c705116-d8c3-43a0-a8e2-6540d4d80836"},
    {name: "personalized_ittar",id: "17f74adf-910f-4c58-88c5-f4e194162c49"},
    {name: "personalised_spray_perfume",id: "dfaaa5f5-ea31-4e1f-8192-d9c3edc297f3"},
    {name: "boss_perfume",id: "84da9fe1-1efc-41db-b24d-599f4c9c67a4"},
    {name: "guilty",id: "0e56d627-4f78-4d22-afff-0f484f5ee46f"},
    {name: "signature",id: "6da721a1-143b-4a74-ab19-e30238722b64"},
    {name: "infinity",id: "49d6348c-8d42-4078-a5ce-a0f075eaedc2"},
    {name: "cr7",id: "acd55857-eb33-4466-abea-83eea580dbf5"},
    {name: "itch_care_rollon", id: "a1c3ae65-ea29-4d89-b67c-1a36dd77c50c"},
    {name: "rose_perfume", id: "c2ddcd62-429f-4b1d-b0b2-e00932a78703"}
]

productUrlMap.forEach(function(item){
    if (window.location.href.endsWith(item.name)){
        window.location.href = "https://shreejiittar.mini.store/products/"+item.id;
    }
})
