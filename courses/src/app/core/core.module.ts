import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { InputComponent } from './input/input.component';
import { SearchSectionComponent } from './search-section/search-section.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent,  ButtonComponent, LogoComponent, BreadcrumbsComponent, InputComponent, SearchSectionComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    LogoComponent,
    BreadcrumbsComponent,
    InputComponent,
    SearchSectionComponent
  ]
})
export class CoreModule { }
