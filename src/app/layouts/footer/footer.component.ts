import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  link_items = [
    { title: 'Home', route: '' },
    { title: 'About', route: 'about' },
    { title: 'Services', route: 'services' },
    { title: 'Contact', route: 'contact' },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(value) {
    this.router.navigate([value]);
  }

}
