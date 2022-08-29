//linkar as camadas do MVC

//view <- controller ->model
import Controller from "./controller";
import Model from "./model";
import View from "./view";

//criando a instancia
const ViewInstance = new View();
const ModelInstance = new Model()
const ControllerInstance = new Controller(ViewInstance, ModelInstance);

const cadastrar = document.getElementById('cadastrar'); //dado do boão calcular
const createProduct:HTMLElement | null= document.getElementById('create-product');

const nameProduct:HTMLElement | null= document.getElementById('name'); //defino o tipo da variavel u passo como nulo, pego o elemento no html pelo ID
const brandProduct:HTMLElement | null= document.getElementById('brand');
const priceProduct:HTMLElement | null= document.getElementById('price');

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
cadastrar?.addEventListener('click',function () {
    cadastrarClick
});

// 
function cadastrarClick() {
    
   console.log('Ola eu to na index ts');
   
    (createProduct as HTMLFormElement)?.addEventListener("submit", ViewInstance.ListenClickButton);
    ModelInstance.saveProductToLocalStorage(product);

}



cadastrarClick();