import KosarElem from "./KosarELem.js";

export default class Kosar{
    //adattagok
    lista = []
    #szuloElem
    //konstruktor
    constructor(lista, szuloElem){
        this.lista = lista;
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.kiir()
    }
    //tagfüggvények
    kiir() {
        this.lista.forEach((elem) => {
            new KosarElem(elem, this.#szuloElem);
        })
    }
    vegosszegMegjelenit(ertek){
        let vegosszegElem = $(".vegosszeg")
        vegosszegElem.empty();
        vegosszegElem.append(`Végösszeg: ${ertek} $`)
    }
}