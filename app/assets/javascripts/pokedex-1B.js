Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $div = $('<div class="detail">');
  var $img = $('<img>').attr('src', pokemon.escape('image_url'));
  $img.attr('alt', pokemon.escape("name"));
  var $ul =  $('<ul class="poke-details-ul">');
  $div.append($img);

  var ignore = ['image_url', 'created_at', 'updated_at'];
  _.each(pokemon.attributes, (function (attr, key) {
    if (ignore.indexOf(key) < 0) {
      var html = "<li>" + key + ": " + attr + "</li>";
      $ul.append(html);
    }
  }));

  $div.append($ul);
  this.$pokeDetail.html($div);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  event.preventDefault();
  var $selectedPokemon = $(event.currentTarget);
  var id = $selectedPokemon.data('id');
  var pokemon = new Pokedex.Models.Pokemon({ id: id });
  pokemon.fetch({
    success: function() {
      this.renderPokemonDetail(pokemon);
    }.bind(this)
  });
};
