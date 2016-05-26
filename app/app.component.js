/*  El primer componente.

    Los componentes son los bloques de construccion de una aplicacion Angular
    Estos controlar una porcion de la pantalla - una vista - a traves de su template asociado.
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); // import Component permite utilizar la declaracion de componentes en el fichero. Lo trae desde angular-core que es uno de los modulos mas importantes de Angular.
// Con el decorador @Component se le indica a Angular cual es nuestro template a usar en este componente
// @Component permite asociar la metadata con la clase del componente (ver linea 26)
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        // import Component permite utilizar la declaracion de componentes en el fichero. Lo trae desde angular-core que es uno de los modulos mas importantes de Angular.
        core_1.Component({
            // Selector CSS que representara al componente. Lleva el nombre my-app.
            /** Selector for my (main and only one) web component name: my-app */
            selector: 'my-app',
            // Aca se especifica el template asociado al componente. Aunque aca se toma en cuenta un texto en HTML, esto tambien podria incluir data-bindings que podrian ir incluso
            // A las propiedades de otros web components que tienen sus templates propios, que a su vez, estos templates pueden identificar a otros componentes.
            // Al final, la aplicacion Angular se vuelve un arbol de componentes.
            /** Template for my main web component (A fair welcomming, tho) */
            template: '<h1>My First Angular 2 App</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent; //AppComponent es el nombre del componente principal de la aplicacion
//# sourceMappingURL=app.component.js.map