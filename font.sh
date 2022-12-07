#!/bin/bash

weights=(Black Bold Book BookItalic BoldItalic Medium)

for weight in ${weights[@]}; do 
     echo "https://newsroom.spotify.com/wp-content/themes/ftr/assets/fonts/CircularSpotifyText-$weight.otf"
done
# curl -L https://newsroom.spotify.com/wp-content/themes/ftr/assets/fonts/CircularSpotifyText-Bold.otf --output "CircularSpotifyText-Bold"