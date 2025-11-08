import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  link_items = [
    { title: 'About', route: 'about' },
    { title: 'Services', route: 'services' },
    { title: 'Accomplishment', route: 'our-work' },
    { title: 'Contact', route: 'contact' },
    { title: 'Career', route: 'career' },
  ];

  router = inject(Router);

  route(value) {
    this.router.navigate([value]);
  }

}
