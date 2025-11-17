import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
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
        path: 'accomplishment',
        loadComponent: () => import("./our-work/our-work.component").then(m => m.OurWorkComponent)
    },
    {
        path: 'career',
        loadComponent: () => import("./career/career.component").then(m => m.CareerComponent)
    },
    {
        path: 'certifications',
        loadComponent: () => import("./certifications/certifications.component").then(m => m.CertificationsComponent)
    }
];
