import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { FilterAbilityPipe } from './filter-ability.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeDetailsComponent,
    FilterPipe,
    FilterAbilityPipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
