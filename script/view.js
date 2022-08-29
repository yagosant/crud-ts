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
    return View;
}());
export default View;
