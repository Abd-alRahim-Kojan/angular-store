import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './page/footer/footer.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  PageComponent,
  SpinnerComponent,
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
