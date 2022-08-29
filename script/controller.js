var Controller = /** @class */ (function () {
    function Controller(View, Model) {
        this.View = View;
        this.Model = Model;
    }
    ;
    Controller.prototype.addProductToList = function () {
        var containerResultado = document.getElementById('container-resultado'); //div que vai receber o resultado renderizado
        //chamando a função da view
        this.View.renderProduct();
    };
    ;
    Controller.prototype.generateUniqueId = function (products) {
        //map recebe 3 parametros nome index e array, os dois ultimos n são obrigatorios
        var ids = products.map(function (product) {
            return product.id;
        });
        //sortear e order o array, sort passa dois parametros
        var sortedIds = ids.sort(function (a, b) {
            return a - b; //faz de modo crescente
        });
        var lastId = sortedIds[sortedIds.length - 1]; //ex se for 3 o ultimo é 4
        return lastId + 1;
    };
    return Controller;
}());
export default Controller;
