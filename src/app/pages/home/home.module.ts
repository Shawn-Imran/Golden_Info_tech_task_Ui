import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
