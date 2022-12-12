import { Component, Input, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/model/category.model';
import { DetailSale } from 'src/app/model/detalleVenta.model';
import { Product } from 'src/app/model/product.model';
import { ShopCartService } from 'src/app/services/shop-cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-gallery-products',
  templateUrl: './gallery-products.component.html',
  styleUrls: ['./gallery-products.component.scss']
})
export class GalleryProductsComponent implements OnInit {

  @Input() elementos: Product[] = [];

  //elementCart: DetailSale = this.shopCartService.newElementCart();
  seleccionados : Product[] = [];
  elementsCart: DetailSale[] = []; 
  @Output() elementsCart2: DetailSale[] = this.elementsCart; 

  constructor(public modalService: BsModalService, private storeService: StoreService, private shopCartService: ShopCartService){
    this.seleccionados = storeService.seleccionados;
    this.elementsCart = shopCartService.carrito;
  };


  ngOnInit(): void {
  }
  selectProduct(pro :Product): void{
    this.shopCartService.addElementCart(pro,1);
    console.log(this.elementsCart)
    this.storeService.agregarSeleccionado(pro);
    console.log(this.seleccionados)
  }

}
