Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon();
  pokemon.save(attrs, {
    success: function (model, response, options) {
      this.pokes.add(pokemon);
      this.addPokemonToList(pokemon);
      callback(pokemon);
    }.bind(this)
  })
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var pokemon = $(event.currentTarget).serializeJSON()['pokemon'];
  this.createPokemon(pokemon, this.renderPokemonDetail.bind(this));
};
