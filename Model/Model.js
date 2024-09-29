import { DRESSLIST } from "../Model/adat.js";

export default class Model{
    //adattagok
    #LISTA = [];
    KOSARLISTA = [];

    //konstruktor
    constructor(lista){
        this.#LISTA = lista
        
    }
    //tagfüggvények
    getLista(){
        return this.#LISTA
    }

    getKosarLista(){
        return this.KOSARLISTA
    }

    kosarhozAd(objekt){
        this.KOSARLISTA += objekt
    }
}