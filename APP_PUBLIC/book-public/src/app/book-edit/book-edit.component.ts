import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookid: string;
  bookDetail:Book = new Book();
  error:string = "";

  constructor(private WebApi:BookService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.FillBookDetails()
  }

  ngOnInit(): void {
  }

  FillBookDetails() {
    this.activatedRoute.paramMap.subscribe( params => {
      this.bookid = params.get("bookid");
      this.WebApi.getBookById(this.bookid).subscribe(
        (data) => {
          this.bookDetail = data;
        },
        (err) => {
          this.error = "No book info found.";
        }
      )
    });
  } 

  UpdateBookDetails(){
    console.log(this.bookDetail);
    this.WebApi.updateBook(this.bookDetail).subscribe(
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

  openBookDetails(){
    this.router.navigateByUrl("books/" + this.bookid);
  }
}
