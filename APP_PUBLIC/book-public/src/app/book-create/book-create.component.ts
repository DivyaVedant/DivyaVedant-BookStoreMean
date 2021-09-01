import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookDetail:Book = new Book();
  error:string = "";

  constructor(private WebApi:BookService, private router: Router) { }

  ngOnInit(): void {}
  
  AddbookDetails(){
    this.WebApi.addNewBook(this.bookDetail).subscribe(
      (data) => {
        this.error ="";
        this.router.navigateByUrl("books");
      },
      (err)=> {
        console.log(err);
        this.error ="Problem adding new book, Please try again.";
      }
    );
  }

  openBookList(){
    this.router.navigateByUrl("books");
  }
}
