import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() buttons = [{label: 'Add', action: 'add'}, 
  {label: 'Delete All', action: 'deleteAll'}]

  public books : Book[] = [];

  constructor(private list:BookService, private router: Router) { }

  ngOnInit(): void {
    this.books = this.list.getBookList()
  }

  deleteBook(i:number) {
    if (i !== -1) {
      this.books.splice(i, 1);
    } 
  }

  editBook(i:number) {
    this.router.navigate(['/book','form'])
  }

  execAction(event: {data: {name: string, desc: string}, action: string}) {
    switch(event.action) {
      case 'add':
        this.router.navigate(['/book','form'])
        break
      case 'deleteAll':
        break
    }
  }

  }


