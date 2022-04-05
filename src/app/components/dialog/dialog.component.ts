import { Component, Inject, OnInit } from '@angular/core';
import { Root } from '../config.model';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  metaData!: Root;
  document: boolean = false;
  invoice: boolean = false;

  kontrola:string = '';

  form: FormGroup = new FormGroup({});
  selectedOption = '1';

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, 
  private apiService: ApiService,
  private fb: FormBuilder) {

    this.form = fb.group({
      ranges: [this.selectedOption, [Validators.required]],
    });
   }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
  }

  ngOnInit(): void {
    
    this.apiService.getMetaData().subscribe((data) => {
      this.metaData = data;
      console.log(this.metaData);
    });    
    this.kontrola = this.data;
    console.log("dialog: " +this.metaData);
  }

}
