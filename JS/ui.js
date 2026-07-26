export class uiPagina {
    obtenerImagenesTipos(tipoNombre) {
        const  url = `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${tipoNombre}.svg`;

        return `
            <img
                src = ${url}
                alt = '${tipoNombre}'
                class = 'tipo'
            >                
        `;
    }

    obtenerClaseTipos(tipo) {
        const tipos = {
            'fuego': 'bg-fuego',
            'agua': 'bg-agua',
            'planta': 'bg-planta',
            'veneno': 'bg-veneno',
            'normal': 'bg-normal',
            'volador': 'bg-volador',
            'tierra': 'bg-tierra',
            'roca': 'bg-roca',
            'hielo': 'bg-hielo',
            'acero': 'bg-acero',
            'dragon': 'bg-dragon',
            'hada': 'bg-hada',
            'siniestro': 'bg-siniestro',
            'psiquico': 'bg-psiquico',
            'electrico': 'bg-electrico',
            'lucha': 'bg-lucha',
        }
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