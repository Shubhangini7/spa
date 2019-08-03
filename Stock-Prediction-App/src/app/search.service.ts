import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() { }

  car = ['ford', 'chevrolet', 'buick'];
  myData()
  {
    let a: number = 10;
    let b: number = 20;
    let c:number = a + b;
    return c;
  }

}
