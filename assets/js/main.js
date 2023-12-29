const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?ofset=${offset}&limit=${limit}`

//processamento assíncrono;
//promece;
//por padrão o fetch usa o GET;
fetch(url)
    //sucesso: then e try
    .then(function (response) {
        console.log(response)
    })
    //fracasso
    .catch(function (error) {
        console.error(error)
    })
    //Independente do sucesso ou do fracasso das functions anteriores o finally será chamado;
    .finally(function() {
        console.log('Requisição concluída')
    })

try {

} catch (error) {

} finally {

}