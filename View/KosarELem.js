export default class KosarElem{
    #obj = {}
    //konstruktor
    constructor(obj, szuloElem){
        this.#obj = obj
        this.szuloElem = szuloElem;
        this.kosarMegjelenit();
    }
    //tagfüggvények
    kosarMegjelenit(){
        this.szuloElem.append(`
            <div class="">
            <div class="kartya">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}" class="w-100">
            <p>${this.#obj.name}</p>
            <p>${this.#obj.price} $</p>
            </div>
            </div>`)
    }
}