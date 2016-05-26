/*  El primer componente.

    Los componentes son los bloques de construccion de una aplicacion Angular
    Estos controlar una porcion de la pantalla - una vista - a traves de su template asociado.
*/

import { Component } from '@angular/core';  // import Component permite utilizar la declaracion de componentes en el fichero. Lo trae desde angular-core que es uno de los modulos mas importantes de Angular.

// Con el decorador @Component se le indica a Angular cual es nuestro template a usar en este componente
// @Component permite asociar la metadata con la clase del componente (ver linea 26)
@Component({ 
  
  // Selector CSS que representara al componente. Lleva el nombre my-app.
  /** Selector for my (main and only one) web component name: my-app */
  selector: 'my-app', 
  
  // Aca se especifica el template asociado al componente. Aunque aca se toma en cuenta un texto en HTML, esto tambien podria incluir data-bindings que podrian ir incluso
  // A las propiedades de otros web components que tienen sus templates propios, que a su vez, estos templates pueden identificar a otros componentes.
  // Al final, la aplicacion Angular se vuelve un arbol de componentes.
  /** Template for my main web component (A fair welcomming, tho) */
  template: '<h1>My First Angular 2 App</h1>'
})

// Finalmente, se exporta esta clase, que aunque ahora no contiene nada, en un futuro, los otros web components podran acceder a esta (por medio de import) y usar sus metodos.
/** Exporting my brand new web component! Be free, little buddy! */
export class AppComponent { } //AppComponent es el nombre del componente principal de la aplicacion

