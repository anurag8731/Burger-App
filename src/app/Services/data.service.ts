import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlData = 'http://demo0331559.mockable.io/data';
  private categoryData = 'http://demo0331559.mockable.io/data?category=';

  constructor(private http: HttpClient) { }

  getData(): Observable<Item> {
    return this.http.get<Item>(this.urlData);
  }
  getCategory(category): Observable<Item> {
    return this.http.get<Item>(this.categoryData + category);
  }
}
