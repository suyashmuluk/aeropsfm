import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  close = false;

  link_items = [
    { title: 'Home', route: 'home' },
    { title: 'About', route: 'about' },
    { title: 'Services', route: 'services' },
    { title: 'Contact', route: 'contact' },
  ];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  route(value) {
    this.router.navigate([value]);
    if (this.close) {
      document.getElementById('nav_link').classList.remove('toggle_nav');
      document.getElementById('menu_icon').classList.remove('icon_position');
      this.close = false;
    }
  }

  toggleNavbar() {
    document.getElementById('nav_link').classList.toggle('toggle_nav');
    document.getElementById('menu_icon').classList.toggle('icon_position');
    document.getElementById('nav_link').classList.contains('toggle_nav') ? this.close = true : this.close = false;
  }

}
