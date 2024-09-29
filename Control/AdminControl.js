import AdminModel from "../Model/Model.js";
import AdminTermekek from "../View/AdminTermekek.js";
import { DRESSLIST } from "../Model/adat.js";

export default class AdminControl{
    constructor(){
        this.termekElem=$(".admin-tbody");
        this.model = new AdminModel(DRESSLIST);
        new AdminTermekek(this.model.getLista(), this.termekElem);
    }
}