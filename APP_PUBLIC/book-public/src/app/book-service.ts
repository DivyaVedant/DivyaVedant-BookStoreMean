import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000';
  private headers = {'content-type':'application/json'};
  constructor(private http: HttpClient) { }

  getBookList() :Observable<any>{
    const path = this.API_URL + '/api/books';
    return this.http.get(path);
  }

  getBookById(bookid: string): Observable<any> {
    const path = this.API_URL + '/api/books/' + bookid;
    return this.http.get(path);
  }

  addNewBook(book: Book):Observable<any> {
    const path = this.API_URL + '/api/books';
    return this.http.post(path,book,{"headers": this.headers});
  }

  updateBook(book: Book):Observable<any> {
    const path = this.API_URL + '/api/books/' + book._id;
    return this.http.put(path, book, {"headers":this.headers});
  }

  deleteBook(bookid: string):Observable<any> {
    const path = this.API_URL + '/api/books/' + bookid;
    return this.http.delete(path);
  }
}
  

