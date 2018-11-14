import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';

const appRoutes:Routes=[
  // {path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);
