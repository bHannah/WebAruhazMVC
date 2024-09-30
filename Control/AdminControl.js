import AdminModel from "../Model/Model.js";
import AdminTermekek from "../View/AdminTermekek.js";
import { DRESSLIST } from "../Model/adat.js";


export default class AdminControl{
    
    constructor(){
        this.init(DRESSLIST);

        this.esemenykezelo();
    }

    init(lista) {
        this.termekElem = $(".admin-tbody");
        this.model = new AdminModel(lista);
        this.termek = new AdminTermekek(this.model.getLista(), this.termekElem);
    }

    esemenykezelo(){
        $(window).on("torles", (event)=>{
            DRESSLIST.splice(event.detail, 1);
            this.init(DRESSLIST)
            console.log(event.detail);
        });
    }

    listahozAdas(){
        const form = document.getElementById('hozzaadas');
        const formElemek = form.elements;
        for (let i = 0; i < formElemek.length; i++) {
            console.log(formElemek[i].name, formElemek[i].value);
        }
    }
}