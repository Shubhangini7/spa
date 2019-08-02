import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() { }

  car = ['ford', 'chevrolet', 'buick'];

  myData()
  {
    return 'This is my Data, man!';
  }
}
