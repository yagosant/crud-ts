//linkar as camadas do MVC
//view <- controller ->model
import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";
//criando a instancia
var ViewInstance = new View();
var ModelInstance = new Model();
var ControllerInstance = new Controller(ViewInstance, ModelInstance);
(function start() {
    ViewInstance.eventListenerHandle();
})();
