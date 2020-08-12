import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: any;
  products: any;
  filteredData: any;
  private _searchTerm: string;
  categories: any;
  category: string;
  filteredProduct: [];

  get searchTerm(): string {
    return this._searchTerm;
  }

  @Input()
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredData = this.filterProduct(value);
  }

  constructor(private data: DataService,private route: ActivatedRoute,private router : Router) {}

  ngOnInit(): void {
    this.data.getData()
      .subscribe((data) => {
        this.items = data;
        this.filteredData = this.items;
        this.categories = data;

        this.route.queryParamMap.subscribe((params: ParamMap) => {
          this.category = params.get('category');
          this.filteredData = (this.category) ?
          this.items.filter(p => p.category === this.category) : this.items;
        });
      });
  }

  // tslint:disable-next-line: typedef
   filterProduct(searchString: string) {
     return this.items.filter( (product) =>
      product.title.toLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);
   }

   // tslint:disable-next-line: typedef
   onDetail(c) {
    this.router.navigate(['/ItemList', c.category]);
   }
}
