import { Component, Injectable, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Root } from '../config.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  imenaTipaDokumenta: string[] = [];
  demoData!: Root;
  
  constructor(private apiService: ApiService) { 
    
  }

  ngOnInit(): void {
    this.dohvatiPodatke();
    console.log(this.demoData);
  }

  dohvatiPodatke(){
    this.apiService.getMetaData().subscribe((data) => {
      this.demoData = data;
      //console.log(data);
    });
  }

 
  

}
