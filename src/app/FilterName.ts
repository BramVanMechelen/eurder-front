import { Pipe, PipeTransform } from '@angular/core';
import {Item} from './items/itemservice/item';
@Pipe({
  name: 'filter'
})
export class FilterName implements PipeTransform {
  transform(items: Item[], searchText: string): Item[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }
}
