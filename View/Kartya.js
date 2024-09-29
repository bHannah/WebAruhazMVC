export default class Kartya{
    #obj = {}
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj = obj
        this.szuloElem = szuloElem;
        this.kartyaMegjelenit()
        this.kattintottElem = $(".kattintott:last")
        this.esemenyKezelo()
    }
    //tagfüggvények
    kartyaMegjelenit(){
        this.szuloElem.append(`
            <div class="col-lg-4 col-sm-5 p-2">
            <div class="kartya d-flex align-items-end flex-column h-100">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}" class="w-100">
            <p>${this.#obj.name}</p>
            <p class="mt-auto col-lg-6 col-sm-12">${this.#obj.price} $</p>
            <button class="kattintott">Kosárba</button>
            </div>
            </div>`)
    }

    esemenyKezelo(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail: this.#obj});
            window.dispatchEvent(e);
        })
    }
}