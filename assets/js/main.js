function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" 
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

/*Pegar a lista de pokemons, mapear os pokemons, converter essa lista de 
pokemons em uma lista de "li"; juntar essas listas de li sem separador.
Irá criar um html que irá concatenar com o html existente.*/
pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml= pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})