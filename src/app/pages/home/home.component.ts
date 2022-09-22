import { Component, OnInit } from '@angular/core';
import SwiperCore, { Thumbs, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  thumbsSwiper: any;
  constructor() { }

  ngOnInit(): void {
  }

}
