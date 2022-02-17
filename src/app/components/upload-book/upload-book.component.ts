import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-upload-book',
  templateUrl: './upload-book.component.html',
  styleUrls: ['./upload-book.component.scss']
})
export class UploadBookComponent implements OnInit {
  uploadBookForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UploadBookComponent>,
    private bookService: BookService,
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) { }

  ngOnInit(): void {
    this.uploadBookForm = this.formBuilder.group({
      file: [null]
    });
  }
  upload(): void {
    if (confirm('Are you sure you want to upload a file')) {
      console.log(this.uploadBookForm.controls['file'])
    }
  }
  fileChange(d: Event) {
    let fileList: any = (d.target as HTMLInputElement).files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      console.log(file)
      this.bookService.uploadBook(this.data.id, formData).subscribe()
    }
  }
}
