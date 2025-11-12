class Enemigo extends Personaje {

    constructor(nombre, vida, ataque, dialogo) {
        super(nombre, dialogo);
        this.vida = vida;
        this.ataque = ataque;
    }

    ataque(Aliado, Enemigo) {
        if (!Aliado.Objeto) {
            Aliado.regresaAHabitacionAnterior();
        } else {
            Enemigo = null;
        }
    }

    const EstadoUnidense = new Enemigo('EstadoUnidense', 1, 1000, 'Make America Great Again, Donald Duck rules.');
    const Java = new Enemigo('Java', 1, 1000, 'Vas a suspender Programacion y es TU problema.');
    const Renfe = new Enemigo('Renfe', 1, 1000, 'Retraso el tiempo como mis trenes');
}