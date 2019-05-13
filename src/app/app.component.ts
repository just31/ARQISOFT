import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public products: any[] = [];

  ngOnInit() {

    function supports_html5_storage() {
      try {
        return 'localStorage' in window && window.localStorage !== null;
      } catch (e) {
        return false;
      }
    }

    if (supports_html5_storage()) {

      // Create a data model to write it to localStorage.
      this.products = [
        {
          id: 1,
          count: 0,
          name: 'Mask tape for skin',
          price: '20$',
          description: 'Quality mask tape for skin',
          img: 'https://www.krasotka-market.ru/storage/img_cache/202/045/20204570/front.jpg'
        },
        {
          id: 2,
          count: 0,
          name: 'Cream',
          price: '30$',
          description: 'Good cream',
          img: 'https://www.krasotka-market.ru/storage/img_cache/202/045/20204563/front.jpg'
        },
        {
          id: 3,
          count: 0,
          name: 'Hand cream',
          price: '40$',
          description: 'Very good hand cream',
          img: 'https://www.krasotka-market.ru/storage/img_cache/202/045/20204556/front.jpg'
        },
        {
          id: 4,
          count: 0,
          name: 'Cosmetics',
          price: '50$',
          description: 'Quality cosmetics',
          img: 'https://www.krasotka-market.ru/storage/img_cache/202/045/20204550/front.jpg'
        }
      ];

      localStorage.setItem('object', JSON.stringify(this.products));
      this.products = JSON.parse(localStorage.getItem('object'));

    } else {
      alert('Your browser can not work with local storage!');
    }

  }

}
