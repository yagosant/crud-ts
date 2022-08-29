"use strict";
//linkar as camadas do MVC
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//view <- controller ->model
const controller_1 = __importDefault(require("./controller"));
const model_1 = __importDefault(require("./model"));
const view_1 = __importDefault(require("./view"));
//criando a instancia
const ViewInstance = new view_1.default();
const ModelInstance = new model_1.default();
const ControllerInstance = new controller_1.default(ViewInstance, ModelInstance);
const cadastrar = document.getElementById('cadastrar'); //dado do boão calcular
const createProduct = document.getElementById('create-product');
const nameProduct = document.getElementById('name'); //defino o tipo da variavel u passo como nulo, pego o elemento no html pelo ID
const brandProduct = document.getElementById('brand');
const priceProduct = document.getElementById('price');
//criando um prod mockado para testar o retorno no localstorage
const product = {
    id: 1,
    name: 'feijao',
    brand: 'Tio Joao',
    price: 8.50,
    category: 'Food',
    active: true,
    quantity: 200
};
//add eventos
cadastrar === null || cadastrar === void 0 ? void 0 : cadastrar.addEventListener('click', function () {
    cadastrarClick;
});
// 
function cadastrarClick() {
    console.log('Ola eu to na index ts');
    createProduct === null || createProduct === void 0 ? void 0 : createProduct.addEventListener("submit", ViewInstance.ListenClickButton);
    ModelInstance.saveProductToLocalStorage(product);
}
cadastrarClick();
