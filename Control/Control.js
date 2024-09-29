import Model from "../Model/Model.js";
import Termekek from "../View/Termekek.js";
import { DRESSLIST } from "../Model/adat.js";
import Kosar from "../View/Kosar.js";

export default class Control{
    constructor(){
        this.termekElem=$(".termekek")
        this.model = new Model(DRESSLIST)
        new Termekek(this.model.getLista(), this.termekElem)
        this.#esemenykezelo();
        this.esemenyTorles();
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            this.kosarElem = $(".kosar");
            this.model.kosarhozAd(event.detail);
            this.kosar = new Kosar(this.model.KOSARLISTA, this.kosarElem)
            let vegosszeg = this.model.vegosszegSzamito();
            this.kosar.vegosszegMegjelenit(vegosszeg);
        });
    }

    esemenyTorles(){
        $(window).on("eltavolitas", (event)=>{
            this.kosarElem = $(".kosar");
            this.model.kosarbolTorol(event.detail)
            this.kosar = new Kosar(this.model.KOSARLISTA, this.kosarElem)
            let vegosszeg = this.model.vegosszegSzamito();
            this.kosar.vegosszegMegjelenit(vegosszeg);

        })
    }
}