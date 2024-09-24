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
            <div class="card col-sm kartya" id="box">
            <img src="${this.#obj.pic}" alt="${this.#obj.name}">
            <p class="card-text">${this.#obj.color}</p>
            </div>`)
    }
}