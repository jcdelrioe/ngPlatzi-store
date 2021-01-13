import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. Constructor');
  }

// ngOnChanges(changes: SimpleChanges) {
//   console.log('2. ngOnChange');
//   console.log(changes);
// }

ngOnInit() {
  console.log('3. ngOnInit');
}

ngDoCheck() {
  console.log('4. ngDoCheck');
}

ngOnDestroy() {
  console.log('4. ngDoCheck');
}

  addCart() {
    console.log('Add carrito');
    this.productClicked.emit(this.product.id);
  }
}
