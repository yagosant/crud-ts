import { Product } from "../types/product";

//criando a classe
export default class View {
    constructor() {
        
    };

    //função para renderizar os itens
    renderProduct(product:Product){
        const productListEement = document.getElementById('product-list');
        // vai add na tela os itens

       if(productListEement) productListEement.innerHTML += `
       <tr>
       <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.price}</td>
       <td>${product.brand}</td> 
       <td>${product.quantity}</td>
       </tr> `;
    };

    addProduct() {}

    eventListenerHandle() {
    const formButtonElement = document.getElementById("addButton");

    formButtonElement?.addEventListener("click", () => {
      const nameElement = document.getElementById("nameInput");
      const brandElement = document.getElementById("brandInput");
      const priceElement = document.getElementById("priceInput");
      const categoryElement = document.getElementById("categoryInput");
      const activeElement = document.getElementById("activeInput");
      const quantityElement = document.getElementById("quantityInput");

      this.renderProduct({
        active: true,
        brand: (brandElement as HTMLInputElement).value,
        category: (categoryElement as HTMLInputElement).value,
        id: 1,
        name: (nameElement as HTMLInputElement).value,
        price: parseInt((priceElement as HTMLInputElement).value),
        quantity: parseInt((quantityElement as HTMLInputElement).value),
      });
    });
  }
}