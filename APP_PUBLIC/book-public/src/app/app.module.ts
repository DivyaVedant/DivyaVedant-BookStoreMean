import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailsComponent } from './book-details/book-details.component';

import { BookService } from './book-service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    BooklistComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',redirectTo:"/home",pathMatch:'full'},
      { path: 'home', component: HomepageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'books', component: BooklistComponent },
      { path: 'book/create', component: BookCreateComponent },
      { path:  'books/:bookid',component:BookDetailsComponent},
      { path: 'books/edit/:bookid',component:BookEditComponent},
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
