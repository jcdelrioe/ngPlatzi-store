import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import {MaterialModule} from './../material/material.module';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
