import { Component } from '@angular/core';
import { Observable,map,pipe } from 'rxjs';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  cartCount$: Observable<number>;
  constructor(private basketService:BasketService){}
  
  ngOnInit(){
    this.cartCount$ = this.basketService.basketSource$.pipe(
      map(response => response ? response.items.reduce((sum, item) => sum + item.quantity, 0) : 0)
    );
  }
}
