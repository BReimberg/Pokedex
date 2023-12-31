function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
    <span class="number">#0001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
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