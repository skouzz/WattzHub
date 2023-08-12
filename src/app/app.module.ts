import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrandsComponent } from './brands/brands.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AudiComponent } from './audi/audi.component';
import { AudiModelsService } from './audi-models.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayimgComponent } from './displayimg/displayimg.component';
import { TeslaComponent } from './tesla/tesla.component';
import { BmwComponent } from './bmw/bmw.component';
import { KiaComponent } from './kia/kia.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HondaComponent } from './honda/honda.component';
import { MaseratiComponent } from './maserati/maserati.component';
import { CitroenComponent } from './citroen/citroen.component';
import { VolvoComponent } from './volvo/volvo.component';
import { RollsRoyceComponent } from './rolls-royce/rolls-royce.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchhomeComponent } from './searchhome/searchhome.component';
import { FaradayComponent } from './faraday/faraday.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    BrandsComponent,
    SearchbarComponent,
    NavbarComponent,
    AudiComponent,
    DisplayimgComponent,
    TeslaComponent,
    BmwComponent,
    KiaComponent,
    MercedesComponent,
    FooterComponent,
    HondaComponent,
    MaseratiComponent,
    CitroenComponent,
    VolvoComponent,
    RollsRoyceComponent,
    SearchResultsComponent,
    SearchhomeComponent,
    FaradayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Add FormsModule to the imports array

  ],
  providers: [AudiModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
