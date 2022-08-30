//linkar as camadas do MVC

//view <- controller ->model
import Controller from "./controller.js";
import Model from "./model.js";
import View from "./view.js";

//criando a instancia
const ViewInstance = new View();
const ModelInstance = new Model();
const ControllerInstance = new Controller(ViewInstance, ModelInstance);

(function start() {
  ViewInstance.eventListenerHandle();
})();
