//criando a classe
var View = /** @class */ (function () {
    function View() {
    }
    ;
    //função para renderizar os itens
    View.prototype.renderProduct = function (product) {
        var productListEement = document.getElementById('product-list');
        // vai add na tela os itens
        if (productListEement)
            productListEement.innerHTML += "<div class=\"product-item\">\n       ".concat(product.name, " - R$").concat(product.price, " - ").concat(product.quantity, "\n     </div>");
    };
    ;
    //função criar produto
    View.prototype.ListenClickButton = function (event) {
        //evita que recarregue
        event.preventDefault();
        alert("oiee");
    };
    //função de listagem
    View.prototype.handleAddEventListener = function () {
        var addButtonElement = document.getElementById('cadastrar');
        var formElement = document.getElementById('create-product');
        addButtonElement.addEventListener('submit', function (event) {
            //vai receber um default o obj evento, impede que ele carregue novamente
            event === null || event === void 0 ? void 0 : event.preventDefault();
            console.log(event);
        });
        /* (addButtonElement as HTMLFormElement).addEventListener('formdata', (event: FormDataEvent) => {
            //pega os dados
            alert('Lula');
            console.log(event);
            
        }); */
    };
    ;
    return View;
}());
export default View;
