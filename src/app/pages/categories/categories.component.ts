import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.sevice.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  categories?: Observable<string[]>;

  constructor(public http: HttpService) {}

  ngOnInit(){
      this.categories = this.http.getCategories();
  }
}
