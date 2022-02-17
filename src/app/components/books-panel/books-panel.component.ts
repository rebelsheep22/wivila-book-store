import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';
import { CreateBookComponent } from '../create-book/create-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { UploadBookComponent } from '../upload-book/upload-book.component';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.scss'],
})
export class BooksPanelComponent implements OnInit {
  books$: any;
  displayedColumns: string[] = [
    'id',
    'name',
    'image',
    'category',
    'author',
    'price',
    'modify',
  ];
  constructor(
    private router: Router,
    private bookService: BookService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {
      console.log(res);
      this.books$ = res;
    });
  }
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      location.reload();
    });
  }
  createBook(): void {
    const dialogRef = this.dialog.open(CreateBookComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      let category;
      if (res.category.value === 'programming') {
        category = ['programming'];
      } else if (res.category.value === 'novels') {
        category = ['novels'];
      } else if (res.category.value === 'comics') {
        category = ['comics'];
      }
      const body = {
        author: res.author.value,
        category: category,
        description: res.description.value,
        imageUrl: res.imageUrl.value,
        name: res.name.value,
        price: res.price.value,
        readingUrl: res.readingUrl.value,
      };

      this.bookService.createBook(body).subscribe(() => {
        location.reload();
      });
    });
  }
  editBook(book: Book): void {
    const dialogRef = this.dialog.open(EditBookComponent, {
      data: book,

    });
    dialogRef.afterClosed().subscribe((res: any) => {
      const body = {
        description: res.description.value,
        imageUrl: res.imageUrl.value,
        price: res.price.value,
        readingUrl: res.readingUrl.value,
      };

      this.bookService.updateBook(book.id!, body).subscribe(() => {
      });
    });
  }
  uploadBook(book: Book):void{
    const dialogRef = this.dialog.open(UploadBookComponent,{
      data: book,
      width: '400px'
    })
  }
  goBack(): void {
    this.router.navigate(['']);
  }
}
