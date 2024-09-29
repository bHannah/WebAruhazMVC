import Model from "../Model/Model.js";
import Termekek from "../View/Termekek.js";
import { DRESSLIST } from "../Model/adat.js";

export default class Control{
    constructor(){
        this.termekElem=$(".termekek")
        this.model = new Model(DRESSLIST)
        new Termekek(this.model.getLista(), this.termekElem)
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            this.kosarElem = $(".kosar");
            this.model.kosarhozAd(event.detail);
            console.log(this.model.KOSARLISTA)
        });
    }
}