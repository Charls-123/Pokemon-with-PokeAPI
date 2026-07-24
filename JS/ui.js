export class uiPagina {
    async imprimirPokemon(url) {
        const {abilities, name, types, sprites, id} = await url;
        
        const contenedorCards = document.querySelector('#pokemones')
        const urlImagen = url.sprites.other['official-artwork'].front_default;

        const card = document.createElement('DIV');


        const noNombre = document.createElement('header');
        noNombre.classList.add('header-card')

        const noPokedex = document.createElement('h2');
        noPokedex.textContent = id;

        const nombre = document.createElement('h2');
        nombre.textContent = name;

        
        const imgPoke = document.createElement('img');
        imgPoke.src = urlImagen;

        const contenedorTipo = document.createElement('div');

        contenedorTipo.innerHTML = `
        ${
            abilities.forEach(habilidad => {
                
            })
        }`

        


        noNombre.appendChild(noPokedex)
        noNombre.appendChild(nombre)

        card.appendChild(noNombre);
        card.appendChild(imgPoke);


        contenedorCards.appendChild(card)
        
    }
}