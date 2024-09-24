import Kartya from "./Kartya.js";

export default class Termekek{
    //adattagok
    #lista = []
    #szuloElem
    //konstruktor
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.kiir()
    }
    //tagfüggvények
    kiir() {
        this.#lista.forEach((elem) => {
            new Kartya(elem, this.#szuloElem);
        })
    }
}