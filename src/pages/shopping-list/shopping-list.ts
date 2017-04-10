import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../providers/shopping-list-service";
import { Ingredient } from "../../models/ingredient";

/**
 * Generated class for the ShoppingList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {

  listItems: Ingredient[];
  constructor(private slService: ShoppingListService){

  }

  ionViewWillEnter() {
    this.loadItems();
  }

  private loadItems() {
    this.listItems = this.slService.getItems();
  }

  onAddItem(form: NgForm) {
    this.slService.addItem(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }
  
   onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();
  }

}

