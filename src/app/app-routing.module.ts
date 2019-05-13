import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// We configure lazy load of application modules.
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'list', loadChildren: './list/list.module#ListModule' },
  { path: 'list/details/:id', loadChildren: './details/details.module#DetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
