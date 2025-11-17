import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
  imports: [MatTabsModule, MatCardModule]
})
export class OurWorkComponent {

  router = inject(Router);

  routeToHome() {
    this.router.navigate([""]);
  }
}
