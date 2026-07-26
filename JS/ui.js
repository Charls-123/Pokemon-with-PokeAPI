export class uiPagina {
    obtenerImagenesTipos(tipoNombre) {
        const  url = `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${tipoNombre}.svg`;

        return `
            <img
                src = ${url}
                alt = '${tipoNombre}'
                class = 'tipo ${this.obtenerClaseTipos(tipoNombre)}'
            >                
        `;
    }

    obtenerClaseTipos(tipo) {
        const tipos = {
            'fire': 'bg-fuego',
            'water': 'bg-agua',
            'grass': 'bg-planta',
            'poison': 'bg-veneno',
            'normal': 'bg-normal',
            'flying': 'bg-volador',
            'ground': 'bg-tierra',
            'rock': 'bg-roca',
            'ice': 'bg-hielo',
            'steel': 'bg-acero',
            'dragon': 'bg-dragon',
            'fairy': 'bg-hada',
            'dark': 'bg-siniestro',
            'psychic': 'bg-psiquico',
            'electric': 'bg-electrico',
            'fight': 'bg-lucha',
        }

        return tipos[tipo];
    }

    imprimirPokemon(url) {
        const {abilities, name, types, sprites, id} = url;
        
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
        contenedorTipo.classList.add('tipos')

        contenedorTipo.innerHTML = `
            ${
                types.map( tipo => {
                    return this.obtenerImagenesTipos(tipo.type.name)
                    }).join('')
            }
        `

        noNombre.appendChild(noPokedex)
        noNombre.appendChild(nombre)

        card.appendChild(noNombre);
        card.appendChild(imgPoke);
        card.appendChild(contenedorTipo);


        contenedorCards.appendChild(card)
        
    }

    limpiarContenedor(contenedor) {
        while(contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild)
        }
    }
}