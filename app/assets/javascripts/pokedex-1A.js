Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $('<li class="poke-list-item" data-id="'+ pokemon.get('id') +'">');
  var html = "Name: " + pokemon.escape("name");
  html += "<br>Type: " + pokemon.get("poke_type");

  $li.html(html);
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  window.p = this.pokes;
  this.pokes.fetch({
    success: function() {
      this.pokes.each(function(poke){
        this.addPokemonToList(poke);
      }.bind(this));
    }.bind(this)
  })
};
