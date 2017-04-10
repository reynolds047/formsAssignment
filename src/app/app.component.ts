import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { ShoppingList } from '../pages/pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ShoppingList;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }
}

