import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomecontenComponent } from './components/homeconten/homeconten.component';

export const routes: Routes = [
    { path: '', redirectTo: '/snt/home', pathMatch: 'full' },
    {
        path: "snt", children: [
            {
                path: "home", component: HomecontenComponent
            },
            {
                path: "about", component: AboutComponent
            },
            {
                path: "contact", component: ContactComponent
            }
        ], component: HomeComponent
    }
];
