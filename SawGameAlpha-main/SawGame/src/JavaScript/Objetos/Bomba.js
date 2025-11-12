class Bomba extends Objeto {
    constructor(nombreObjeto, usoObjeto) {
        super(nombreObjeto, usoObjeto);
    }

    tirarBomba(Josemi, Renfe) {
        let tieneBomba = false;

        for (let i = 0; i < josemi.inventario.length; i++) {
            if (josemi.inventario[i].nombreObjeto === this.nombreObjeto) {
                tieneBomba = true;
                break;
            }
        }

        if (tieneBomba) {
            renfe = false;
        } else {
            return null;
        }
        }
}

Bomba.tirarBomba(Josemi);
