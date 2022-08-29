var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Model = /** @class */ (function () {
    function Model() {
    }
    ;
    //salvando no local storage
    Model.prototype.saveProductToLocalStorage = function (product) {
        var _a;
        //resgata os itens
        var productsLocalStorage = JSON.parse((_a = localStorage.getItem('products')) !== null && _a !== void 0 ? _a : "[]");
        //resgata no local storage e substitui na tela pelo antigo, 1 - chave do local,valor
        var newProductsLocalStorage = __spreadArray(__spreadArray([], productsLocalStorage, true), [product], false); //spread operation, um é copia de outro
        //salvando
        localStorage.setItem("products", JSON.stringify(newProductsLocalStorage));
    };
    return Model;
}());
export default Model;
