function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
</li>
`
}

const pokemonList = document.getElementById('pokemonList');

/*Pegar a lista de pokemons, mapear os pokemons, converter essa lista de 
pokemons em uma lista de "li"; juntar essas listas de li sem separador.
Irá criar um html que irá concatenar com o html existente.*/
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})