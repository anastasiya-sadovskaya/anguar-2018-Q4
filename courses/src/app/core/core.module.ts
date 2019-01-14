import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,  BreadcrumbsComponent],
  imports: [
    CommonModule,
    NgbModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent    
  ]
})
export class CoreModule { }
