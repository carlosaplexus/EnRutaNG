import { Component } from '@angular/core';
import { transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
                slideInAnimation
                // animation triggers go here
              ]
})
export class AppComponent {
  title = 'EnRutaNG';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
