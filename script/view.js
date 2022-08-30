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
            productListEement.innerHTML += "\n       <tr>\n       <td>".concat(product.id, "</td>\n       <td>").concat(product.name, "</td>\n       <td>").concat(product.price, "</td>\n       <td>").concat(product.brand, "</td> \n       <td>").concat(product.quantity, "</td>\n       </tr> ");
    };
    ;
    View.prototype.addProduct = function () { };
    View.prototype.eventListenerHandle = function () {
        var _this = this;
        var formButtonElement = document.getElementById("addButton");
        formButtonElement === null || formButtonElement === void 0 ? void 0 : formButtonElement.addEventListener("click", function () {
            var nameElement = document.getElementById("nameInput");
            var brandElement = document.getElementById("brandInput");
            var priceElement = document.getElementById("priceInput");
            var categoryElement = document.getElementById("categoryInput");
            var activeElement = document.getElementById("activeInput");
            var quantityElement = document.getElementById("quantityInput");
            _this.renderProduct({
                active: true,
                brand: brandElement.value,
                category: categoryElement.value,
                id: 1,
                name: nameElement.value,
                price: parseInt(priceElement.value),
                quantity: parseInt(quantityElement.value),
            });
        });
    };
    return View;
}());
export default View;
