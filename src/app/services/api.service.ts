import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getMetaData(): Observable<any> {
    return this.http.get("./assets/metaData.json");
  }

  public getFolders(): Observable<any> {
    return this.http.get("./assets/folder.json");
  }

  public getInvoices(): Observable<any> {
    return this.http.get("./assets/invoice.json");
  }

  public getDocuments(): Observable<any> {
    return this.http.get("./assets/document.json");
  }
  
}
