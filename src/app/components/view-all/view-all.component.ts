import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {
  state$!: Observable<object>;
  category!: string;
  constructor(private activatedRoute: ActivatedRoute,private router: Router ,private bookService: BookService) { }
  fetchedBooks$: any;
  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params['category'];
    console.log(this.category)
    switch(this.category) {
      case "programming":
        this.bookService.getProgramming().subscribe((res)=>{
          this.fetchedBooks$ = res
        })
        break;
      case "novels":
        this.bookService.getNovels().subscribe((res)=>{
          this.fetchedBooks$ = res
        })
        break;
      case "comics":
        this.bookService.getComics().subscribe((res)=>{
          this.fetchedBooks$ = res
        })
        break;

    }
  }
  goBack(): void {
    this.router.navigate(['']);
  }
}
