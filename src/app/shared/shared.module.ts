import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { PageComponent } from './page/page.component';

const sharedComponents = [HeaderComponent, FooterComponent, PageComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
