import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() addItem = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  ngOnInit(): void {}
  addButton: boolean = false;
  amount: number = 1;

  add() {
    this.addItem.emit({ item: this.product, quantity: this.amount });
  }

  remove() {
    this.removeItem.emit({ item: this.product, quantity: this.amount });
  }
}
