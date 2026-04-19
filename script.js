const container = document.getElementById('pokemon-container');

async function buscarPokemons() {
    
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const pokemons = data.results;


        for (let pokemon of pokemons) {
            const detalheRes = await fetch(pokemon.url);
            const detalhe = await detalheRes.json();
            criarCard(detalhe);
        }
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}

function criarCard(pokemon) {
    // elemento do card 
    const card = document.createElement('div');
    card.classList.add('card');

    // configurar a imagem
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;

    //nome do personagem
    const nome = document.createElement('h3');
    nome.textContent = pokemon.name.toUpperCase();

    // descrição
    const info = document.createElement('p');
    info.textContent = `Tipo: ${pokemon.types[0].type.name}`;

    // card e adiciona container
    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(info);
    container.appendChild(card);
}

// start
buscarPokemons();