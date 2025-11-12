package controlador;

import modelo.procesos.Juego;

import java.util.Scanner;

public class Programa {
    public void ejecutar() {
        int numeroNaves=0;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("Ingrese el número de naves: ");
            numeroNaves=sc.nextInt();
            if (numeroNaves<1) {
                System.out.println("Tiene que ser 1 o más combates ");
            }
        } while (numeroNaves < 1);
        Juego juego= new Juego(numeroNaves);
        juego.combatir();
    }
}

/*  MAL HECHO
public void ejecutar() {
        modelo.procesos.Juego juego= new modelo.procesos.Juego();
        int numeroNaves=0;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("Ingrese el número de naves: ");
            numeroNaves=sc.nextInt();
            if (numeroNaves<1) {
                System.out.println("Tiene que ser 1 o más combates ");
            }
        } while (numeroNaves < 1);
        juego.combatir(numeroNaves);
    }
 */
