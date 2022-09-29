import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BookService } from './book/services/book.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommandbarComponent } from './shared/components/commandbar/commandbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommandbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
