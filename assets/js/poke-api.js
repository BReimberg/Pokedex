const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    //um novo fetch para url do pokemon que quer acessar e convertendo, o repsonse que retornar, em JSON; Continua em detailRequests próximo ao final do código;
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`

    return fetch(url)
        //converter o response em json
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        //mapear a lista de pokémons em uma lista de requisições dos detalhes do pokémons e chama o pokeApi.getPokemonDetail, no iníco do código;
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        //lista de promessa a ser resolvida;
        .then((detailRequests) => Promise.all(detailRequests))
        //quando a lista for resolvida apresenta a lista de detalhes dos pokemons
        .then((pokemonsDetails) => pokemonsDetails)
}