import { DRESSLIST } from "../Model/adat.js";

export default class Model{
    //adattagok
    #LISTA = [];
    //konstruktor
    constructor(lista){
        this.#LISTA = lista
    }
    //tagfüggvények
    getLista(){
        return this.#LISTA
    }
}