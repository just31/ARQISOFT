import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profileForm = new FormGroup({
    nameProduct: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  //Get data from the localstorage model.
  products:any[] = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));

  products_length:number = this.products.length;

  // Add a new value to the catalog.
  onSubmit():any {

    let id = this.products.length + 1;

    this.products.push({
      "id": id,
      "count": 0,
      "name": this.profileForm.value.nameProduct,
      "price": this.profileForm.value.price+"$",
      "description": this.profileForm.value.description,
      "img": "https://www.krasotka-market.ru/storage/img_cache/202/045/20204563/front.jpg",
    });

    // Get a new length of the array, after adding a new item to the catalog. To output it, in the number of products dashboard.
    this.products_length = this.products.length;

    localStorage.setItem("object2", JSON.stringify(this.products));
    this.products = JSON.parse(localStorage.getItem("object2"));
  }

  // Remove the selected value from the catalog.
  deleteItem(index):any {
    if(localStorage.getItem("object2")) {
      this.products = JSON.parse(localStorage.getItem('object2'));
      this.products.splice(index, 1);
      localStorage.setItem('object2', JSON.stringify(this.products));
    } else {
      this.products = JSON.parse(localStorage.getItem('object'));
      this.products.splice(index, 1);
      localStorage.setItem('object', JSON.stringify(this.products));
    }
    // Get a new length of the array, after delete item to the catalog. To output it, in the number of products dashboard.
    this.products_length = this.products.length;
  }

  ngOnInit() {
    //console.log(JSON.parse(localStorage.getItem("object2")));
  }

}
