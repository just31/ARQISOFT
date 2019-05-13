import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: '',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  //Get data from the localstorage model.
  products:any[] = localStorage.getItem("object2") ? JSON.parse(localStorage.getItem("object2")) : JSON.parse(localStorage.getItem("object"));

  // Declare variables to display them in the item card.
  id: number;
  name: string;
  price: string;
  count: number;
  description: string;
  img: string;

  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {

    this.subscription = activateRoute.params.subscribe(params=> {
        // Find the product id from the routing parameters.
        this.id = params['id'];

        // Find by this id the same value in the model.
        let search = this.products.find(item => item.id === Number(this.id));

        // Fill in the variables for each individual card.
        this.name = search.name;
        this.img = search.img;
        this.price = search.price;
        this.description = search.description;
        this.count = Number(search.count);
        // The value of the view counter is increased by 1.
        this.count++;


        // Convert a string from localstorage to an object.
        this.products = JSON.parse(localStorage.getItem("object2"));

        // Find index of specific object using findIndex method.
        let objIndex = this.products.findIndex((obj => obj.id == this.id));

        // Update object name property, at  the find the product id.
        this.products[objIndex].count = this.count;

       // Writing a new value count, to localstorage.
        localStorage.setItem("object2", JSON.stringify(this.products));

      }
    );
  }

  ngOnInit() {
  }

}
