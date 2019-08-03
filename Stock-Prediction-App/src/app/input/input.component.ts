import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private searchservice:SearchService) { }

 sum:number;
  ngOnInit() {
//    console.log(this.searchservice.car);
    this.sum = this.searchservice.myData();
  }

}
