import { PromesaComponent } from './promesa/promesa.component';
import { PAGES_ROUTES } from './pages.routes';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

// Pipe module
import { PipesModule } from '../pipes/pipes.module';

// ng2-charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
     ProgressComponent,
     Graficas1Component,
     IncrementadorComponent,
     GraficoDonaComponent,
     AccountSettingsComponent,
     PromesaComponent,
     RxjsComponent,
     ProfileComponent
  ],
  exports: [
     DashboardComponent,
     ProgressComponent,
     Graficas1Component,
     PromesaComponent

  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule
  ]
})
export class PagesModule { }
