import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainComponent } from './Components/main/main.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ImgStyleDirective } from './Directives/img-style.directive';
import { CalcDiscountPipe } from './Pipes/calc-discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ProductsListComponent,
    ImgStyleDirective,
    CalcDiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
