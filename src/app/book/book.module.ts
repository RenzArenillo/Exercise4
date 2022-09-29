import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CommandbarComponent } from '../shared/components/commandbar/commandbar.component';
import { SharedModule } from '../shared/components/shared.module';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: 
  [
    BookListComponent,
    BookItemComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
