import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LINK_ITEMS } from 'src/constants/shared.constant';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  link_items = LINK_ITEMS;
  currentYear = new Date().getFullYear();

  router = inject(Router);

  route(value) {
    this.router.navigate([value]);
  }

}
