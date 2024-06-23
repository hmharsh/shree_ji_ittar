#!/bin/bash
array=(champa_ittar laung_ittar kesar_ittar lavender_ittar kaveda_ittar chameli_ittar gulab_ittar bulgariya_gulab_ittar shahi_gulab_ittar mahendi_ittar mogra_ittar chandan_ittar khus_ittar lotus_ittar cool_water_ittar geeli_mitti_ittar cherry_fragrance_spray_perfume oud_ittar talcum_powder_spray_perfume 1881_fragrance_spray_perfume bubblegum_or_boomer_fragrance_spray_perfume emir_fragrance_spray_perfume lemon_fragrance_spray_perfume cool_water_spray_perfume ice_berg_fragrance_spray_perfume amber_ittar blossom_spray_perfume mogra_spray_perfume lavender_fragrance_spray_perfume dalchini_or_cinnamon_ittar mysore_sandal_soap_spray_perfume magnet_fragrance_perfume_spray misfit_fragrance_spray_perfume geeli_mitti_spray_perfume coffee_fragrance_spray_perfume chocolatey_fragrance_spray_perfume kesar_chandan_spray_perfume rajnigandha_fragrance_spray_perfume black_xs_fragrance_spray_perfume kastoori_or_musk_ittar grape_fruit_fragrance_spray_perfume tuscan_lather_spray_perfume black_current_fragrance_spray_perfume ylang_ylang_spray_perfume saffron_spray_perfume cranberry_fragrance_spray_perfume aqua_fresh_spray_perfume belpatra_spray_perfume kapoor_or_camphor_ittar citronella_rollon vanilla_spray_perfume peppermint_fragrance_ittar pineapple_fragrance_spray_perfume kesar_chandan_ittar savage_fragrance_spray_perfume champa_chameli_spray_perfume blue_fragrance_spray_perfume kesar_gulab_ittar rajanigandha_ittar kaweda_or_kewra_or_kaveda_spray_perfume orange_fragrance_spray_perfume belpatra_ittar champa_chameli_ittar kesar_gulab_spray_perfume aqua_ittar boss_ittar guilty_ittar black_xs_ittar cr7_ittar emir_ittar signature_ittar infinity_ittar tuscan_lather sleep_rollon focus_boost_rollon pain_killer_rollon personalized_ittar personalised_spray_perfume boss_perfume guilty signature infinity cr7 itch_care_rollon rose_perfume natural_ittar_combo ajwain_ittar rose_cooler_perfume mogra_cooler_perfume kesar_gulab_chandan_ittar kesar_mogra_chandan_ittar kesar_mogra_ittar gulab_chandan_ittar mogra_chandan_ittar khus_cooler_perfume chandan_cooler_perfume kaweda_chandan_ittar)

for i in "${array[@]}"
do
  #echo $i
  curl https://shreejiittar.in/product.html#$i > ./$i.html
done