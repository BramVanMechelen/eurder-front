import {Component, OnInit} from '@angular/core';
import {ItemService} from '../itemservice/item.service';
import {Item} from '../itemservice/item';

import {Location} from '@angular/common';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  items: Item[];


  constructor(private itemService: ItemService, private location: Location) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe((items => this.items = items));
  }

  addItem(name: string, description: string, amountOfStock: number, price: number): void {
    const numberOfOrignalItems = this.items.length;
    const item: Item = {name, description, amountOfStock, price} as Item;
    this.itemService.addItem(item).subscribe(
      createdItem => {this.items.push(createdItem); })
      .add(() => this.getItems())
      .add(() => {if (this.items.map(iteminMap => iteminMap.name).includes(name)) {this.goBack(); }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
