import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, ShoppingList } from '../pages/pages';
import { ShoppingListService } from '../providers/shopping-list-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShoppingList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShoppingList
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, ShoppingListService
  ]
})
export class AppModule {}
