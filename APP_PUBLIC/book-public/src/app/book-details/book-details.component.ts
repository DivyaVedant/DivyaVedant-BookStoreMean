import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book  = new Book();
  bookid:string;
  error:string;

  constructor(private BookAPI: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.ShowBookDetails();
  }
  ngOnInit(): void {}

  ShowBookDetails() {
    this.activatedRoute.paramMap.subscribe( params => {
      this.bookid = params.get("bookid");
      this.BookAPI.getBookById(this.bookid).subscribe(
        (data) => {
          this.book = data;
        },
        (err) => {
          this.error = "No book info found.";
        }
      )
    });
  } 

  openBookList(){
    this.router.navigateByUrl("books");
  }
  openEditBook(){
    this.router.navigateByUrl("books/edit/" + this.bookid);
  }
  deleteBook(){
    if(confirm('Are you sure want to delete this book?')) {
      this.BookAPI.deleteBook(this.bookid).subscribe(
        (data) => {
          this.router.navigateByUrl("books");
        },
        (err) => {
          this.error = "Error Processing your request..";
        }
      )
    }
  }
}
