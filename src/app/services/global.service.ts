import { Injectable } from '@angular/core';
import { Item } from '../admin/item/item';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  menu: String = ''
  items: Item[] = [];
  constructor() { }
}
