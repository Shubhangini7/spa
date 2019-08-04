import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';
import { Stock } from '../stock';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private CurrentSearchValue : Stock;
  private pastSearchValue : Stock[] = []
  constructor(private searchservice:SearchService) { }

  ngOnInit() {
  }
  getClick(SearchElement : string): void {
  	this.CurrentSearchValue = this.searchservice.getClick(SearchElement);
    //storing Search Results
    //this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
    this.pastSearchValue.push(this.CurrentSearchValue);
  }
}
