import { Product } from "../types/product";

export default class Model {
    constructor() {
        
    };

    //salvando no local storage
    saveProductToLOcalStorage(product: Product){

        //resgata os itens
        const productsLocalStorage = JSON.parse(localStorage.getItem('products') ?? "[]");

        //resgata no local storage e substitui na tela pelo antigo, 1 - chave do local,valor
        const newProductsLocalStorage = [...productsLocalStorage, product]; //spread operation, um é copia de outro
        
        //salvando
        localStorage.setItem("products", JSON.stringify(newProductsLocalStorage));
    }
}