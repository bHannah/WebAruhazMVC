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
        if (!this.KOSARLISTA.includes(o)) {
            this.KOSARLISTA.push(o);
        }else{
            this.mennyisegnovel(o);
        }
    }

    listaFuzes(o){
        this.KOSARLISTA.push(o)
    }

    mennyisegnovel(o){
        for (let i = 0; i < this.KOSARLISTA.length; i++) {
            if(this.KOSARLISTA[i].name === o.name){
                this.KOSARLISTA[i].menny += 1
            }                
        }
    }

    vegosszegSzamito(){
        let osszeg = 0;
        for (let i = 0; i < this.KOSARLISTA.length; i++) {
            osszeg += (this.KOSARLISTA[i].price*this.KOSARLISTA[i].menny)
        }
        return osszeg;
    }

    kosarbolTorol(o){
        for (let i = 0; i < this.KOSARLISTA.length; i++) {
            if(this.KOSARLISTA[i].name === o.name){
                this.KOSARLISTA[i].menny = 1
            }  
        }
        this.KOSARLISTA.splice(o,1)
    }
}