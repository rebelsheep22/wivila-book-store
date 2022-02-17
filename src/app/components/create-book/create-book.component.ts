import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  createBookForm!: FormGroup;

  constructor(  private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.createBookForm = this.formBuilder.group({
     name: ['string'],
     author: ['string'],
     description: ['string'],
     imageUrl: ['string'],
     readingUrl: ['string'],
     category: ['programming'],
     price: [0]})
  }
  cancelClick() {
    this.dialogRef.close();
  }

}
