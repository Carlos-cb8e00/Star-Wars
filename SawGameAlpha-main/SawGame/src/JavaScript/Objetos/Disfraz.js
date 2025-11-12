class Disfraz extends Objeto {
    constructor(nombreObjeto, usoObjeto) {
        super(nombreObjeto, usoObjeto);
    }

    darDisfraz(Charlie, EstadoUnidense) {
        let tieneDisfraz = false;

        for (let i = 0; i < josemi.inventario.lenght; i++) {
            tieneDisfraz = false;
            break;
        }
    }

    usarDisfraz(Charlie) {
        let tieneDisfraz = false;
        if (Charlie.tieneDisfraz()) {
            tieneDisfraz = true;
            Charlie.usarDisfraz();
        } else {
            return null;
        }
    }
}

Disfraz.darDisfraz(Charlie, Josemi);
Disfraz.usarDisfraz(Charlie);
