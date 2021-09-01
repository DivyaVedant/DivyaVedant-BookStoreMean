import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book-service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private BookAPI:BookService, private router:Router) { }

  bookList: Book[] = [];

  ngOnInit(): void {
    this.BookAPI.getBookList().subscribe((data) => this.bookList = data, this.handleError);
  }

  openBookDetails(bookid:string){
    this.router.navigateByUrl("books/" + bookid);
  }

  private handleError(error: any) {
    console.log("error");
  }
}
