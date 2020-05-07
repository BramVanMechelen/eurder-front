import {Component, OnInit} from '@angular/core';
import {Item} from './itemservice/item';
import {ItemService} from './itemservice/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items: Item[];
  selectedItem: Item;
  searchText: any;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void{
    this.selectedItem = item;
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe((items => this.items = items));
  }

  trimStock(stockAmount: string): string {
    return stockAmount.slice(6);
  }

  stockColor(item: Item) {
    let color = 'green';
    if (this.trimStock(item.stockUrgency) === 'MEDIUM') {
      color = 'orange';
    } else if (this.trimStock(item.stockUrgency) === 'HIGH') {
      color = 'red';
    }
    return color;
  }

  makeString(nr: number): string {
    return nr.toString();
  }


}
