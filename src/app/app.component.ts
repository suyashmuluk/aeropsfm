import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [FooterComponent, NavComponent, RouterOutlet]
})
export class AppComponent {
  title = 'AEROPSFM';
}
