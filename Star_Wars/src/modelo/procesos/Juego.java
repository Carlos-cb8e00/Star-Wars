package modelo.procesos;

import modelo.beans.Nave;

public class Juego {
    private int numeroNaves;
    private int puntuacionR, puntuacionI=0;
    private int victoriaI, victoriaR=0;

    public Juego(int numeroNaves) {
        this.numeroNaves = numeroNaves;
    }

    public void combatir() {
        for(int i=0;i<numeroNaves;i++) {
            Nave naveR=new Nave("R");
            Nave naveI=new Nave("I");
            int diferencia = 2;

            naveR.setDefensa((int) (Math.random()*3 + 1));
            naveI.setDefensa((int) (Math.random()*4 + 1));

            puntuacionR=naveR.getAtaque()-naveI.getDefensa();
            puntuacionI=naveI.getAtaque()-naveR.getDefensa();

            if ((puntuacionR-puntuacionI)>diferencia){
                victoriaR++;
            } else if ((puntuacionI-puntuacionR)>diferencia){
                victoriaI++;
            }
        }
        mostrarGanador(victoriaI,victoriaR);
    }

    public void mostrarGanador(int victoriaI,int victoriaR) {
        if (victoriaI < victoriaR){
            System.out.println("Han ganado los rebeldes, con un total de "+victoriaR+" victorias");
        } else if (victoriaR < victoriaI){
            System.out.println("Ha ganado el imperio, con "+victoriaI+" victorias");
        } else System.out.println("Empate");
    }
}
