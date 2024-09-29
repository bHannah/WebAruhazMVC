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

    ellenorzes(o){
        if(this.KOSARLISTA.length > 0){
            for(let i = 0; i < this.KOSARLISTA; i++) {
                if(this.KOSARLISTA[i].name === o.name){
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return false
        }

        // var i = 0

        // if(this.KOSARLISTA.length > 0){
        //     while(i<this.KOSARLISTA.length || this.KOSARLISTA[i].name != o.name) {
        //         console.log(this.KOSARLISTA[i])
        //         i++;
        //         console.log(i>=this.KOSARLISTA.length)
        //     }
        // }
        // else{
        //     return false
        // }

        // return i>=this.KOSARLISTA.length;
    }

    kosarhozAd(o){
        if(this.ellenorzes(o) === false){
            this.KOSARLISTA.push(o)
        }else{
            for (let i = 0; i < this.KOSARLISTA.length; i++) {
                if(this.KOSARLISTA[i].name === o.name){
                    this.KOSARLISTA[i].menny += 1
                }                
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