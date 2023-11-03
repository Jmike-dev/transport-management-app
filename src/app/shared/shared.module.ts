import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { TransportComponent } from './components/pages/transport/transport.component';
import { HomeComponent } from './components/pages/home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TransportComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    TransportComponent
  ]
})
export class SharedModule { }
