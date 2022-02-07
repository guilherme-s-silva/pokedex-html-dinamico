const inputPokemon = document.querySelector('#pesquisa');
const infoPokemon = document.querySelector('.info-pokemon');
const nome = document.querySelector('h2');
const foto = document.querySelector('img');
const listaHabilidades = document.querySelector('.lista-habilidades');
const botao = document.querySelector('button');

botao.addEventListener('click', (event) => {
        event.preventDefault();
        if (!inputPokemon.value) {
                infoPokemon.classList.add('hidden');
                return
            }

        fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon.value.toLowerCase()}/`).then( (resposta) => {
        const promise = resposta.json();

        promise.then( (body) => {

            while (listaHabilidades.firstChild) {
                listaHabilidades.removeChild(listaHabilidades.firstChild);
            };

            nome.textContent = body.name.toUpperCase();

            foto.src = body.sprites.front_default;

            const habilidades = body.abilities;
            
            habilidades.map( (habilidade) => {
                const itemHabilidades = document.createElement('p');
                itemHabilidades.textContent = habilidade.ability.name.toUpperCase();

                listaHabilidades.append(itemHabilidades);
            });

            inputPokemon.value = '';

            infoPokemon.classList.remove('hidden');
        });
    });
});