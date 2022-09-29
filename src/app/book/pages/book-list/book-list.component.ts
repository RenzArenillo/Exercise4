import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books : Book[] = [];

  constructor(private list:BookService) { }

  ngOnInit(): void {
    this.books = this.list.getBookList()
  }

  deleteBook(i:number) {
    if (i !== -1) {
      this.books.splice(i, 1);
    } 
  }

  editBook(i:number) {
    
  }


  }


