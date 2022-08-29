import { Product } from "../types/product";

//criando a classe
export default class View {
    constructor() {
        
    };

    //função para renderizar os itens
    renderProduct(product:Product){
        const productListEement = document.getElementById('product-list');

        // vai add na tela os itens
       if(productListEement) productListEement.innerHTML += `<div class="product-item">
       ${product.name} - R$${product.price} - ${product.quantity}
     </div>`;
    };

    
    //função criar produto
    ListenClickButton() {
        
    }
}