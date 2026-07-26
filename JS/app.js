import { DatosPokemon } from './pokeApi.js'
import { uiPagina } from './ui.js'

const api = new DatosPokemon();
const ui = new uiPagina();

function cargarPagina() {
    const btnBusqueda = document.querySelector('#btnBuscar');
    const contenedorPokemones = document.querySelector('#pokemones')

    btnBusqueda.addEventListener('click', async () => {
        const nombre = document.querySelector('#busqueda').value;
        const url = await api.pokemon(nombre)

        if (url) {
            ui.limpiarContenedor(contenedorPokemones);

            ui.imprimirPokemon(url);
        }
        
    })
}

window.addEventListener('DOMContentLoaded', cargarPagina);