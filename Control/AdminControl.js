import Model from "../Model/Model.js"
import AdminTermekek from "../View/AdminTermekek.js";
import { DRESSLIST } from "../Model/adat.js";


export default class AdminControl{

    constructor(){

        this.init(DRESSLIST);

        this.esemenykezelo();
    }

    init(lista) {
        this.termekElem = $(".admin-tbody");
        this.model = new Model(lista);
        this.termek = new AdminTermekek(this.model.getLista(), this.termekElem);
        this.listahozAdas()
    }

    esemenykezelo(){
        $(window).on("torles", (event)=>{
            DRESSLIST.splice(event.detail, 1);
            this.init(DRESSLIST)
            console.log(event.detail);
        });
    }


    //EZEN KELL VÁLTOZTATNI
    listahozAdas(){ 
        // const form = document.getElementById('hozzaadas');
        // const formElemek = form.elements;
        // for (let i = 0; i < formElemek.length; i++) {
        //     console.log(formElemek[i].name, formElemek[i].value);
        // }

        var submit = $("#submit") ;
        submit.on("click", function () {
            console.log("hello")
            const form = document.getElementById('hozzaadas');
            const formElemek = form.elements;
            DRESSLIST.push({name: formElemek[0].value, pic: formElemek[3].value, color: formElemek[2].value, price: formElemek[1].value, menny: 1})
            let termekElem = $(".admin-tbody");
            new AdminTermekek(DRESSLIST, termekElem);
            // console.log(this.model.getLista())
            //init(model.getLista())
        });
    }


}