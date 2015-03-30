# json.array! @pokemon do |pokemon|
#   json.partial! 'pokemon/pokemon', pokemon: pokemon
# end

json.array! @pokemon, partial: 'pokemon/pokemon', as: :pokemon, display_toys: false
