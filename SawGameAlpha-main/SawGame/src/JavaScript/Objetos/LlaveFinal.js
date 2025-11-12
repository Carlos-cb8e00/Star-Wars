class LlaveFinal extends Objeto {
    constructor(nombreObjeto, usoObjeto) {
        super(nombreObjeto, usoObjeto);
    }

    usarLlave(Josemi) {
        if (Josemi.tieneObjeto(this.nombre))  {
            this.usarObjeto()
            console.log("La puerta se abre.");
        } else {
            return null;
        }
    }
}

LlaveFinal.usarLlave(Josemi);
