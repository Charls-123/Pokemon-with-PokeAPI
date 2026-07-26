export class uiPagina {
    obtenerImagenesTipos(tipoNombre) {
        const  url = `https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${tipoNombre}.svg`;

        return `
            <div class='tipo ${this.obtenerClaseTipos(tipoNombre)}'>
                <img
                    src = ${url}
                    alt = '${tipoNombre}'
                    class=icon-tipo
                >                
            </div>
        `;
    }

    obtenerClaseTipos(tipo) {
        const tipos = {
            'fire': 'bg-fire',
            'water': 'bg-water',
            'grass': 'bg-grass',
            'poison': 'bg-poison',
            'normal': 'bg-normal',
            'flying': 'bg-flying',
            'ground': 'bg-ground',
            'rock': 'bg-rock',
            'ice': 'bg-ice',
            'steel': 'bg-steel',
            'dragon': 'bg-dragon',
            'fairy': 'bg-fairy',
            'dark': 'bg-dark',
            'psychic': 'bg-psychic',
            'electric': 'bg-electric',
            'fighting': 'bg-fighting',
        }

        return tipos[tipo];
    }

    imprimirPokemon(pokemon, habilidades) {
        const {abilities, name, types, sprites, id} = pokemon;
        
        const contenedorCards = document.querySelector('#pokemones')
        const urlImagen = pokemon.sprites.other['official-artwork'].front_default;

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
                    return this.obtenerImagenesTipos(tipo.type.name);
                    }).join('')
            }
        `;

        const contenedorHabilidades = document.createElement('div');
        contenedorHabilidades.classList.add('habilidades');

        contenedorHabilidades.innerHTML = `
            ${
                habilidades.map( hab => {
                    // Extraes la descripción y el nombre
                        const nombre = hab.name;
                        const descripcion = hab.flavor_text_entries[0].flavor_text;
                        
                        return `
                            <p><strong>${nombre}</strong> <br>${descripcion}</br></p>
                        `;
                }).join('')
            }
        `;

        noNombre.appendChild(noPokedex)
        noNombre.appendChild(nombre)

        card.appendChild(noNombre);
        card.appendChild(imgPoke);
        card.appendChild(contenedorTipo);
        card.appendChild(contenedorHabilidades);


        contenedorCards.appendChild(card)
        
    }

    limpiarContenedor(contenedor) {
        while(contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild)
        }
    }
}