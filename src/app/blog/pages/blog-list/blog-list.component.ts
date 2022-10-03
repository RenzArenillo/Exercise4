import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

//sssssss
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  @Input() buttons = [{label: 'Add', action: 'add'}, 
  {label: 'Delete All', action: 'deleteAll'}]

  public blogs : Blog[] = [];

  constructor(private list:BlogService, private router: Router) {
   }

  ngOnInit(): void {
    this.blogs = this.list.getBlogList()
  }

  deleteBook(i:number) {
    if (i !== -1) {
      this.blogs.splice(i, 1);
    } 
  }

  editBook(i:number,blog:Blog) {
    this.router.navigate(['/blog/form', blog])
  }

  execAction(event: {data: {name: string, desc: string}, action: string}) {
    switch(event.action) {
      case 'add':
        this.router.navigate(['/blog','form'])
        break
      case 'deleteAll':
        break
    }
  }
}
