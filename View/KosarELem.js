export default class KosarElem{
    #obj = {}
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj = obj
        this.szuloElem = szuloElem;
        this.kosarMegjelenit();
        this.kattintottElem = $(".eltavolit:last")
        this.esemenyTorles();
    }
    //tagfüggvények
    kosarMegjelenit(){
        this.szuloElem.append(`
<<<<<<< HEAD
            <div class="">
            <div class="kartya">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}" class="w-100">
            <p>${this.#obj.name}</p>
            <p>${this.#obj.price} $</p>
            <p>DB: ${this.#obj.menny}</p>
            <button class="eltavolit">Eltávolítás</button>
=======
            <div class="p-2">
            <div class="kartya row">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}" class="col-lg-4 col-md-12 mb-2">
            <p class="col-lg-8 col-md-12">${this.#obj.name}<br>
            ${this.#obj.price} $</p>
            <button class="eltavolit align-self-end">Eltávolítás</button>
>>>>>>> 54d62078eff2dbe05d4e9abc9b090f271d8d2fbf
            </div>
            </div>`)
    }

    esemenyTorles(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("eltavolitas", {detail: this.#obj});
            window.dispatchEvent(e);
        })
    }
}