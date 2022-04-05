import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConfigComponent } from '../config/config.component';
import { Root } from '../config.model';
import { DataComponent } from '../data/data.component';
import { Attribute, Tablica } from '../table.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  folder: boolean = false;
  document: boolean = false;
  documentForm: boolean = false;
  invoiceForm: boolean = false;
  invoice: boolean = false;
  prikaziGumb: boolean = false;
  kontrola: string ='';
  searchable: boolean = false;

  podaciZaPrikaz!: Tablica; 

  metaData!: Root;
  demoData!: Tablica;
  demoDataAttributes: any[] = [];
  realData!: Tablica;

  imenaTipaDokumenta: string[] = [];
  displayedColumns: string[] = [];

  form: FormGroup = new FormGroup({});
  selectedOption = '1';

  constructor(private conf: ConfigComponent, 
    private apiService: ApiService, 
    private dataComp: DataComponent,
    private dialog: MatDialog,
    private fb: FormBuilder ) 
    {
      this.form = fb.group({
        ranges: [this.selectedOption, [Validators.required]],
      });
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '40%',
        data: this.kontrola
      });
    }

    get f(){
      return this.form.controls;
    }
  
    submit(){
      console.log(this.form.value);
    }

  prikaziForm(ime: string) {
    if(ime === 'DOCUMENT'){
      this.documentForm = true;
    }else if(ime === 'INVOICE'){
      this.invoiceForm = true;
    }
    this.openDialog();
  }

  ngOnInit(): void {
    
    this.apiService.getMetaData().subscribe((data) => {
      this.metaData = data;
      console.log(this.metaData);
      this.imenaTipaDokumenta = [this.metaData.FOLDER.displayName,this.metaData.DOCUMENT.displayName,this.metaData.INVOICE.displayName];
      
    });
  }

 


  dohvatiFoldere(){
    this.apiService.getFolders().subscribe({next:(data)=>
      {
        this.demoData = data;
        console.log(this.demoData);
      },
      error:(err)=>{
        alert('Greska u dohvacanju podataka!');
      }
    });
  }

  dohvatiDokumente(){
    this.apiService.getDocuments().subscribe({next:(data)=>
      {
        this.demoData = data;
        console.log(this.demoData);
        
      },
      error:(err)=>{
        alert('Greska u dohvacanju podataka!');
      }
    });
  }

  dohvatiRacune(){
    this.apiService.getInvoices().subscribe({next:(data)=>
      {
        this.demoData = data;
        console.log(this.demoData);
      },
      error:(err)=>{
        alert('Greska u dohvacanju podataka!');
      }
    });
  }


 

  onTypeChange(value: string){
    if(value === this.metaData.FOLDER.displayName){
      this.folder = true;
      this.document = false;
      this.invoice = false;
      this.prikaziGumb = false;
      this.documentForm = false;
      this.invoiceForm = false;
      this.searchable = false;
      this.dohvatiFoldere();

      this.displayedColumns = [];

      for(let display of this.metaData.FOLDER.resultAttributes){
        this.displayedColumns.push(display.name);
      }
      console.log(this.displayedColumns);
    }
    else if(value === this.metaData.DOCUMENT.displayName){
      this.folder = false;
      this.document = true;
      this.invoice = false;
      this.documentForm = false;
      this.invoiceForm = false;
      this.searchable = false;
      this.dohvatiDokumente();
      this.prikazGumba(value);

      this.displayedColumns = [];

      for(let display of this.metaData.DOCUMENT.resultAttributes){
        this.displayedColumns.push(display.name);
      }
      console.log(this.displayedColumns);
    }
    else if(value === this.metaData.INVOICE.displayName){
      this.folder = false;
      this.document = false;
      this.invoice = true;
      this.documentForm = false;
      this.invoiceForm = false;
      this.searchable = false;
      this.dohvatiRacune();
      this.prikazGumba(value);

      this.displayedColumns = [];

      for(let display of this.metaData.INVOICE.resultAttributes){
        this.displayedColumns.push(display.name);
      }
      console.log(this.displayedColumns);

    }
  }

  prikazGumba(ime: string){
    for(let child of this.metaData.FOLDER.childTypes){
      console.log(child);
      if(child.docTypeName === 'DOCUMENT' && ime === this.metaData.DOCUMENT.displayName){
        console.log(child.insertable);
        this.prikaziGumb = child.insertable;
        this.kontrola = child.docTypeName;
        this.searchable = child.searchable;
      }else if(child.docTypeName === 'INVOICE' && ime === this.metaData.INVOICE.displayName){
        console.log(child.insertable);
        this.prikaziGumb = child.insertable;
        this.kontrola = child.docTypeName;
        this.searchable = child.searchable;
      }
    }
  }

}
