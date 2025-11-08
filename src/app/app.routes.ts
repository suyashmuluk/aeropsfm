import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)
    },
    {
        path: 'services',
        loadComponent: () => import("./services/services.component").then(m => m.ServicesComponent)
    },
    {
        path: 'about',
        loadComponent: () => import("./about/about.component").then(m => m.AboutComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import("./contact/contact.component").then(m => m.ContactComponent)
    },
    {
        path: 'our-work',
        loadComponent: () => import("./our-work/our-work.component").then(m => m.OurWorkComponent)
    },
    {
        path: 'career',
        loadComponent: () => import("./career/career.component").then(m => m.CareerComponent)
    },
];
