import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPreloader]'
})
export class PreloaderDirective {

  constructor(private elementRef: ElementRef) {
    this.loadData()
      .then(() => {
        const preloaderEl = this.elementRef.nativeElement;
        preloaderEl.classList.add('preloader__hidden');
        preloaderEl.classList.remove('preloader__visible');
      });
  }

  // Realize preloader.
  loadData(): any {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 2000);
    });
  }

}
