//linkar as camadas do MVC
//view <- controller ->model
import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";
//criando a instancia
var ViewInstance = new View();
var ModelInstance = new Model();
var ControllerInstance = new Controller(ViewInstance, ModelInstance);
var cadastrar = document.getElementById('cadastrar'); //dado do boão calcular
var createProduct = document.getElementById('create-product');
var nameProduct = document.getElementById('name'); //defino o tipo da variavel u passo como nulo, pego o elemento no html pelo ID
var brandProduct = document.getElementById('brand');
var priceProduct = document.getElementById('price');
//criando um prod mockado para testar o retorno no localstorage
/* const product = {
    id: 1,
    name: 'feijao',
    brand: 'Tio Joao',
    price: 8.50,
    category: 'Food',
    active: true,
    quantity: 200

}; */
//add eventos
/* cadastrar?.addEventListener('click',function () {
    cadastrarClick
});

//
function cadastrarClick() {
    
   console.log('Ola eu to na index ts');
   
    (createProduct as HTMLFormElement)?.addEventListener("submit", ViewInstance.ListenClickButton);
    ModelInstance.saveProductToLocalStorage(product);

} */
//função auto invocada ela é lida e invocada
//ViewInstance.renderProduct({})();
(function start() {
    ViewInstance.handleAddEventListener();
})();
