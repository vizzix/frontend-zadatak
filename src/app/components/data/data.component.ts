import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Root2 } from '../table.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  demoData!: Root2;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
   
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
  

}
