import { DatosPokemon } from './pokeApi.js'
import { uiPagina } from './ui.js'

const api = new DatosPokemon();
const ui = new uiPagina();

function cargarPagina() {
    const btnBusqueda = document.querySelector('#btnBuscar');
    const contenedorPokemones = document.querySelector('#pokemones')

    btnBusqueda.addEventListener('click', async () => {
        const nombre = document.querySelector('#busqueda').value;
        //tomamos los datos del pokemon
        const datosPokemon = await api.pokemon(nombre)

        // 2. Usas .map() para crear un arreglo SOLO con los nombres (ej. ['steadfast', 'inner-focus'])
        const nombresHabilidades = datosPokemon.abilities.map( item => item.ability.name );

        // 3. Creas un arreglo de "peticiones pendientes" 
        const peticiones = nombresHabilidades.map( nombre => api.habilidades(nombre) );

        // 4. LA MAGIA: Ejecutas todas al mismo tiempo y esperas a que terminen
        const datosHabilidades = await Promise.all(peticiones);

        if (datosPokemon) {
            ui.limpiarContenedor(contenedorPokemones);

            ui.imprimirPokemon(datosPokemon, datosHabilidades);
        }
        
    })
}

window.addEventListener('DOMContentLoaded', cargarPagina);