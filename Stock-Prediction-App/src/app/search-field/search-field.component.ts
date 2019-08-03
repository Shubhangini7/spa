import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  constructor(private searchservice:SearchService) { }

  sum:number;
  ngOnInit() {
      this.sum = this.searchservice.myData();
  }

}
