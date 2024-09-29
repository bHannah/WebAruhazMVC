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
            <div class="p-2">
            <div class="kosar row">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}" class="col-lg-4 col-md-12 mb-2 h-100">
            <p class="col-lg-8 col-md-12">${this.#obj.name}<br>
            ${this.#obj.price} $<br>
            Mennyiség: ${this.#obj.menny}</p>
            <button class="eltavolit align-self-end">Eltávolítás</button>
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