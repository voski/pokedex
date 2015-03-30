# json.array! @pokemon do |pokemon|
#   json.partial! 'pokemon/pokemon', pokemon: pokemon
# end

json.pokemon @pokemon, partial: 'pokemon/pokemon', as: :pokemon
