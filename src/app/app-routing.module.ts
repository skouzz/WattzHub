import { HondaComponent } from './honda/honda.component';
import { AppComponent } from './app.component';
import { AudiComponent } from './audi/audi.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeslaComponent } from './tesla/tesla.component';
import { BmwComponent } from './bmw/bmw.component';
import { KiaComponent } from './kia/kia.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { MaseratiComponent } from './maserati/maserati.component';
import { CitroenComponent } from './citroen/citroen.component';
import { VolvoComponent } from './volvo/volvo.component';
import { RollsRoyceComponent } from './rolls-royce/rolls-royce.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FaradayComponent } from './faraday/faraday.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'audi', component: AudiComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'tesla', component: TeslaComponent },
  { path: 'bmw', component: BmwComponent },
  { path: 'kia', component: KiaComponent },
  { path: 'mercedes', component: MercedesComponent },
  { path: 'honda', component: HondaComponent },
  { path: 'maserati', component: MaseratiComponent },
  { path: 'citroen', component: CitroenComponent },
  { path: 'volvo', component: VolvoComponent },
  { path: 'rolls-royce', component: RollsRoyceComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'faraday', component: FaradayComponent },






















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
