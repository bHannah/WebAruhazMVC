import AdminKartya from "./AdminKartya.js";

export default class AdminTermekek{
    //adattagok
    #lista = []
    #szuloElem
    //konstruktor
    constructor(lista, szuloElem){
        this.init(lista, szuloElem);
    }
    
    //tagfüggvények
    kiir() {
        this.#lista.forEach((elem, id) => {
            new AdminKartya(elem, this.#szuloElem, id);
        })
    }
    init(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty();
        this.kiir();
    }
}