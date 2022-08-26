"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//criando a classe
class View {
    constructor() {
    }
    ;
    //funcção para renderizar os itens
    renderProduct(product) {
        const productListEement = document.getElementById('product-list');
        // vai add na tela os itens
        if (productListEement)
            productListEement.innerHTML += `<div class="product-item">
       ${product.name} - R$${product.price} - ${product.quantity}
     </div>`;
    }
}
exports.default = View;
