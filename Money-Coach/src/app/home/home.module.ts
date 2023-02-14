import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/banner/about/about.component';
import { CarouselComponent } from './components/banner/about/carousel/carousel.component';



@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BannerComponent
  ]
})
export class HomeModule { }
