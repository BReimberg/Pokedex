const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) =>  {
const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`
return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url)))
}