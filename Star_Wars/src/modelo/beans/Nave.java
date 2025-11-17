package modelo.beans;

public class Nave {
    private int ataque = (int) (Math.random()*6 + 5);   //hay que hacerlo más escalable
    private int defensa=0;
    private String bando="";

    public Nave(String bando){
        this.bando=bando;
    }

    public int getAtaque() {
        return ataque;
    }

    public int getDefensa() {
        return defensa;
    }

    public void setDefensa(int defensa) {
        this.defensa = defensa;
    }


}
