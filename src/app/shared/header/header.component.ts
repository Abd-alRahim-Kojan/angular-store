import {
  Component,
  EventEmitter,
  HostListener,
  NgZone,
  Output,
} from '@angular/core';
import { CartsService } from '../../carts/services/carts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  searchValue: string = '';
  isMenuOpen: boolean = false;
  cartCount: number = 0;

  constructor(private ngZone: NgZone, private cartService: CartsService) {
    this.onResize();

    this.cartService.currentCartCount.subscribe(
      (count) => (this.cartCount = count)
    );
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize')
  private onResize(): void {
    this.ngZone.run(() => {
      if (typeof window !== 'undefined') {
        this.isMenuOpen = window.innerWidth >= 768;
      }
    });
  }

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange() {
    this.searchChange.emit(this.searchValue);
  }
}
