import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product= {
    id: "",
    nombre: "",
    precio: 0,
  };

  @Output() pressSelect = new EventEmitter();
  selectProduct(pro : Product): void{
    this.pressSelect.emit(pro);
  }

}
