import { Component, OnInit } from '@angular/core';
import { MyService, MyDataType } from './list.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Create observable array.
  myObservableArray: Observable<MyDataType[]>;

  constructor(private myService: MyService) {
    this.getData();
  }

  // Get the observable data to display them on the page.
  getData() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.myService.getData();
    }
  }

  // Get data from the localstorage model.
  products:any[] = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));

  products_length:number = this.products.length;

  ngOnInit() {

    // Realize preloader.
    function loadData() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      })
    }
    loadData()
      .then(() => {
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('preloader__hidden');
        preloaderEl.classList.remove('preloader__visible');
      });

  }


}
