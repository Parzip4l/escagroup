import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';
import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { CarrersComponent } from './carrers/carrers.component';
import { CarrerArahComponent } from './carrer-arah/carrer-arah.component';
import { CarrerCityguardComponent } from './carrer-cityguard/carrer-cityguard.component';
import { CarrerChampoilComponent } from './carrer-champoil/carrer-champoil.component';
import { CarrerUrbanicaComponent } from './carrer-urbanica/carrer-urbanica.component';
import { SingleJobComponent } from './single-job/single-job.component';

@NgModule({
  declarations: [IndexComponent, Index2Component, Index3Component, Index4Component, Index5Component, Index6Component, CarrersComponent, CarrerArahComponent, CarrerCityguardComponent, CarrerChampoilComponent, CarrerUrbanicaComponent, SingleJobComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule
  ]
})
export class PagesModule { }
