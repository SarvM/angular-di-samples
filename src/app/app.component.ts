 import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}



/**
 * In the @Injectable() decorator for the service itself. 
 * In the @NgModule() decorator for an NgModule.
 * In the @Component() decorator for a component.
 */