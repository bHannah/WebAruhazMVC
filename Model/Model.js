export default class Model{
    //adattagok
    #LISTA = [];
    KOSARLISTA = [];

    //konstruktor
    constructor(lista){
        this.init(lista);
        
    }
    //tagfüggvények
    init(lista){
        this.#LISTA = lista;
    }

    getLista(){
        return this.#LISTA;
    }

    getKosarLista(){
        return this.KOSARLISTA;
    }

    kosarhozAd(o){
        this.KOSARLISTA.push(o)
    }

    vegosszegSzamito(){
        let osszeg = 0;
        for (let i = 0; i < this.KOSARLISTA.length; i++) {
            osszeg += this.KOSARLISTA[i].price
        }
        return osszeg;
    }

    kosarbolTorol(o){
        this.KOSARLISTA.splice(o,1)
    }
}