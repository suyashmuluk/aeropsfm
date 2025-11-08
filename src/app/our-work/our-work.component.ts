import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-our-work',
    templateUrl: './our-work.component.html',
    styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent {
  
  router = inject(Router);

  routeToHome() {
    this.router.navigate([""]);
  }
}
