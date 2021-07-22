import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit',buscarCancion)
alert('Es necesario tener el CORS desbloqueado para que funcione')
function buscarCancion(e) {
    e.preventDefault();


    //Obtener datos del formulario
    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    if(artista === '', cancion === ''){
        //Usuario dejo algun campo vacio

        UI.divMensaje.textContent = 'Error todo es obligatorio'
        UI.divMensaje.classList.add('error')

        setTimeout(() => {
            UI.divMensaje.remove()
        }, 3000);

        return
    }

    //Consultar API
    const busqueda = new API(artista,cancion)
    busqueda.consultarAPI()

}