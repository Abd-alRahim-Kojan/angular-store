import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './page/footer/footer.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';

const sharedComponents = [FooterComponent, PageComponent, SpinnerComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
