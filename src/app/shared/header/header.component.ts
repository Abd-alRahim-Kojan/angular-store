import {
  Component,
  EventEmitter,
  HostListener,
  NgZone,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  searchValue: string = '';
  isMenuOpen: boolean = false;

  constructor(private ngZone: NgZone) {
    this.onResize();
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
