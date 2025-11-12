class Foto {
    constructor(id, estadoRecogido) {
        this.id = foto;
        this.estadoRecogido = false;
        this.elementoDOM = document.getElementById(id); // Asocia el objeto a su elemento HTML
        this.agregarEventoRecoger(); // Llama al método para agregar el evento de recogida
    }

    agregarEventoRecoger() {
        if (this.elementoDOM) {
            this.elementoDOM.addEventListener('click', () => {
                this.recoger();
            });
        }
    }

    recoger() {
        if (!this.estaRecogida) {
            this.estaRecogida = true;
            mostrarMensaje(this.mensajeRecogido);
            this.elementoDOM.style.display = 'none'; // Oculta la foto del juego
            console.log(`Se ha recogido la ${this.nombre}`);
            // Aquí podrías tener una lógica para añadir la foto al inventario del jugador
        } else {
            mostrarMensaje(`Ya has recogido la ${this.nombre}.`);
        }
    }
}