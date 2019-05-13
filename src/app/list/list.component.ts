import { Component, OnInit } from '@angular/core';
import { MyService, MyDataType } from './list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private myService: MyService) {
    this.getData();
  }

  // Create observable array.
  myObservableArray: Observable<MyDataType[]>;

  // Get data from the localstorage model.
  products: any[] = localStorage.getItem('object2') ? JSON.parse(localStorage.getItem('object2')) :
    JSON.parse(localStorage.getItem('object'));


  // Get the observable data to display them on the page.
  getData() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.myService.getData();
    }
  }

  ngOnInit() {
  }


}
