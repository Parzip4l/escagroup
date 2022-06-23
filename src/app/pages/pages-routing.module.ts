import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrerArahComponent } from './carrer-arah/carrer-arah.component';
import { CarrerCityguardComponent } from './carrer-cityguard/carrer-cityguard.component';
import { CarrerChampoilComponent } from './carrer-champoil/carrer-champoil.component';
import { CarrerUrbanicaComponent } from './carrer-urbanica/carrer-urbanica.component';
import { CarrersComponent } from './carrers/carrers.component';
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { SingleJobComponent } from './single-job/single-job.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'index-1',
        component: IndexComponent
    },
    {
        path: 'index-2',
        component: Index2Component
    },
    {
        path: 'index-3',
        component: Index3Component
    },
    {
        path: 'index-4',
        component: Index4Component
    },
    {
        path: 'index-5',
        component: Index5Component
    },
    {
        path: 'index-6',
        component: Index6Component
    },
    {
        path: 'carrers',
        component: CarrersComponent
    },
    {
        path: 'carrers/arah',
        component: CarrerArahComponent
    },
    {
        path: 'carrers/champoil',
        component: CarrerChampoilComponent
    },
    {
        path: 'carrers/cityguard',
        component: CarrerCityguardComponent
    },
    {
        path: 'carrers/urbanica',
        component: CarrerUrbanicaComponent
    },
    {
        path: 'carrers/urbanica/single-job',
        component: SingleJobComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
