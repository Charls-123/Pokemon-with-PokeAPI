export class DatosPokemon {
    async pokemon(nombre) {
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

            const respuesta = await fetch(url)
            const datos = await respuesta.json();

            return datos;
        }catch (error) {
            console.log('Hubo un error en la conexion', error)
        }
    }
}