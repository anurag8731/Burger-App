import { Component, OnInit } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  newValue: any;

  constructor(private data : DataService) {}

  ngOnInit() {
    this.data.getData()
    .subscribe(data=> {
      this.newValue = data;
    })
  }

  // tslint:disable-next-line: typedef
  searchFun()  {
    let filter = (<HTMLInputElement>document.getElementById('myInput')).value;
    this.title = filter;
  }
}
