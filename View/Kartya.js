export default class Kartya{
    #obj = {}
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj = obj
        this.szuloElem = szuloElem;
        this.kartyaMegjelenit()
    }
    //tagfüggvények
    kartyaMegjelenit(){
        this.szuloElem.append(`
            <div class="col-lg-4 col-sm-5 p-2">
            <div class="kartya">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}" class="w-100">
            <p>${this.#obj.name}</p>
            <button>Kosárba</button>
            </div>
            </div>`)
    }
}