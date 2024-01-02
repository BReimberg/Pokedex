const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 8;
let offset = 0;

function loadPokemonItems(offset, limit) {
    /*Pegar a lista de pokemons, mapear os pokemons, converter essa lista de 
    pokemons em uma lista de "li"; juntar essas listas de li sem separador.
    Irá criar um html que irá concatenar com o html existente.*/
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
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
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})
/*
=======================================================================
LIMITAR PARA PRIMEIRA GERAÇÃO DE POKÉMONS (regra de paginação):

const maxRecords = 151

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNexPage = offset + limit

    if(qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else {
        loadPokemonItems(offset, newLimit)
    }
})
=======================================================================
*/