"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(View, Model) {
        this.View = View;
        this.Model = Model;
    }
    ;
    addProductToList() {
        //chamanado a função da view
        this.View.renderProduct();
    }
    ;
    generateUniqueId(products) {
        //map recebe 3 parametros nome index e array, os dois ultimos n são obrigatorios
        const ids = products.map(function (product) {
            return product.id;
        });
        //sortear e order o array, sort passa dois parametros
        const sortedIds = ids.sort(function (a, b) {
            return a - b; //faz de modo crescente
        });
        const lastId = sortedIds[sortedIds.length - 1]; //ex se for 3 o ultimo é 4
        return lastId + 1;
    }
}
exports.default = Controller;
