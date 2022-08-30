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
    ListenClickButton(event: SubmitEvent) {

        //evita que recarregue
        event.preventDefault();
        alert("oiee");
        
    }

    //função de listagem
    handleAddEventListener(){
        const addButtonElement = document.getElementById('cadastrar');
        const formElement = document.getElementById('create-product');

        (addButtonElement as HTMLFormElement).addEventListener('submit', (event: SubmitEvent) => {
            //vai receber um default o obj evento, impede que ele carregue novamente
            event?.preventDefault();
 
            console.log(event);
        });

        

        /* (addButtonElement as HTMLFormElement).addEventListener('formdata', (event: FormDataEvent) => {
            //pega os dados
            alert('Lula');
            console.log(event);
            
        }); */
    };
}