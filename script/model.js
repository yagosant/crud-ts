"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor() {
    }
    ;
    //salvando no local storage
    saveProductToLocalStorage(product) {
        var _a;
        //resgata os itens
        const productsLocalStorage = JSON.parse((_a = localStorage.getItem('products')) !== null && _a !== void 0 ? _a : "[]");
        //resgata no local storage e substitui na tela pelo antigo, 1 - chave do local,valor
        const newProductsLocalStorage = [...productsLocalStorage, product]; //spread operation, um é copia de outro
        //salvando
        localStorage.setItem("products", JSON.stringify(newProductsLocalStorage));
    }
}
exports.default = Model;
