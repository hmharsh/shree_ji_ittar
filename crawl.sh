#!/bin/bash
array=(oud_ittar kesar_gulab_ittar gulab_ittar)

for i in "${array[@]}"; do
  curl https://shreejiittar.in/product.html#$i > /tmp/$i.html
done
