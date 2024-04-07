import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';

const sharedComponents = [HeaderComponent, FooterComponent, PageComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
