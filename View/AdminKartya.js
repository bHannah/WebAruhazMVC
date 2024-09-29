export default class AdminKartya{
    #obj = {}
    //konstruktor
    constructor(obj, szuloElem, id){
        this.#obj = obj
        this.szuloElem = szuloElem;
        this.kartyaMegjelenit()
        this.id = id;
        this.torolElem = $(".torles:last");
        this.esemenykezelo();
    }
    //tagfüggvények
    kartyaMegjelenit(){
        this.szuloElem.append(`
            <tr class="${this.id}">
                <td><img src="${this.#obj.pic}"></td>
                <td>${this.#obj.name}</td>
                <td>${this.#obj.color}</td>
                <td>${this.#obj.price}</td>
                <td><button class="torles">🗑️</button></td>
            </tr>
            `)
    }

    esemenykezelo(){
            this.torolElem.on("click", ()=>{
                const e = new CustomEvent("torles", {detail:this.id});
                window.dispatchEvent(e);
                // console.log(this.torolElem);
            })
    }
}