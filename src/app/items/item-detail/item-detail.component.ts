import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../itemservice/item';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ItemService} from '../itemservice/item.service';
import {ItemsComponent} from '../items.component';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {


  item: Item;


  constructor(private itemService: ItemService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.getItem();
  }


  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getItemById(id);
  }

  getItemById(id: string): void {
    this.itemService.getItems().subscribe(itemObservable => {
      for (const e of itemObservable) {
        if (e.id === id) {
          this.item = e;
        }
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }

}
