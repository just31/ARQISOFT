import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyService {

  //Get data from the localstorage model.
  mydata: MyDataType[] = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));

  constructor() { }

  //Function showing observable data after 3 seconds.
  getData():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>(observer => {
      setTimeout(() => {
        observer.next(this.mydata);
      }, 3000);
    });
    return data;
  }
}

export class MyDataType
{
  public id: number;
  public name: string;
}
