//linkar as camadas do MVC

//view <- controller ->model
import Controller from "./controller";
import Model from "./model";
import View from "./view";

//criando a instancia
const ViewInstance = new View();
const ModelInstance = new Model()
const ControllerInstance = new Controller(ViewInstance, ModelInstance);

;