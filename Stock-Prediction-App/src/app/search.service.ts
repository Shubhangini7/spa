import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { STOCKS } from './sample-data';
import { ActivatedRoute } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private in: Stock[] = STOCKS;
  constructor() { }

  getClick(SearchElement: string): Stock{
  	for(var i = 0; i < this.in.length; i++)
  	{
  		if(this.in[i].SearchElement == SearchElement)
  		{
  			return this.in[i];
  		}
  	}
  }
}
