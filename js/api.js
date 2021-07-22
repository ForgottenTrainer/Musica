import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion ){
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

        fetch(url)
            .then(respuetas => respuetas.json())
            .then( resultado => {
                if(resultado.lyrics){
                    const {lyrics } = resultado
                    UI.divResulatado.textContent = lyrics
                    UI.headingResulatado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`
                }
                else{
                    UI.divMensaje.textContent = 'Valiendo madre'
                    UI.divMensaje.classList.add('error')
                }
                setTimeout(() => {
                    UI.divMensaje.textContent = 'Valiendo madre'
                    UI.divMensaje.classList.remove('error')
                },2000)
            })
        
    }
}

export default API