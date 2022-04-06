import { Component,CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-app';
  options: AnimationOptions = {
   // path: '/assets/41394-preloader-infinity-design.json',
   // path:'/assets/99752-day-n-night.json'
   path:'/assets/79664-logo-animation.json'
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
