import { Product } from "../types/product";
import Model from "./model";
import View from "./view";

export default class Controller {
    View: any;
    Model: any;
    constructor(View: View, Model: Model) {
        this.View = View;
        this.Model = Model;
    };

    
    addProductToList(){
  
        const containerResultado = document.getElementById('container-resultado'); //div que vai receber o resultado renderizado

        //chamando a função da view
        this.View.renderProduct();
        

    };

    generateUniqueId(products: Product[]){
        //map recebe 3 parametros nome index e array, os dois ultimos n são obrigatorios
        const ids = products.map(function (product) {
            return product.id;
        });

        //sortear e order o array, sort passa dois parametros
        const sortedIds = ids.sort(function (a,b) {
           return a - b; //faz de modo crescente
        });

        const lastId = sortedIds[sortedIds.length - 1]; //ex se for 3 o ultimo é 4
        return lastId + 1;
    }
}