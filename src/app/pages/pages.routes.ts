import { RxjsComponent } from './rxjs/rxjs.component';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { LoginGuardGuard } from '../services/service.index';
import { AdminGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';



const pagesRoutes: Routes = [
    {   path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard],
    children:  [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
      { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
      { path: 'promesas', component: PromesaComponent, data: { titulo: 'Promesas' } },
      { path: 'Rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajuste de tema' } },
      { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de usurio' } },
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },

      // Mantenimientos
      {
         path: 'usuarios',
         component: UsuariosComponent,
         canActivate: [ AdminGuard ],
         data: { titulo: 'Mantenimiento de usuario' } },

      { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales' } },
      { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de medicos' } },
      { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar Médico' } },

      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
