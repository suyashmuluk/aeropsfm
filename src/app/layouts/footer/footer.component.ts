import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {

  link_items = [
    { title: 'About', route: 'about' },
    { title: 'Services', route: 'services' },
    { title: 'Accomplishment', route: 'our-work' },
    { title: 'Contact', route: 'contact' },
    { title: 'Career', route: 'career' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(value) {
    this.router.navigate([value]);
  }

}
