import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list.component';

// Import the observable data service.
import { MyService } from './list.service';

import { PreloaderDirective } from './preloader.directive';

const routes: Routes = [
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [ListComponent, PreloaderDirective],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [MyService]
})
export class ListModule {}
