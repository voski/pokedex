json.extract! pokemon, *pokemon.attributes.keys

if display_toys
  json.toys do
    json.array! pokemon.toys.each do |toy|
      json.partial! 'toys/toy', toy: toy
    end
  end
end
