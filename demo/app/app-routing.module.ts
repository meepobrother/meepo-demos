import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home';
import { AppIndexComponent } from './app-index/app-index';
import { AppOtherComponent } from './app-other/app-other';
import { AppPostComponent } from './app-post/app-post';

export const PageComponents = [
  AppHomeComponent, AppIndexComponent,
  AppOtherComponent, AppPostComponent
];

const routes: Routes = [{
  path: '',
  redirectTo: 'index',
  pathMatch: 'full'
}, {
  path: 'home',
  component: AppPostComponent
}, {
  path: 'index',
  component: AppIndexComponent
}, {
  path: 'other',
  component: AppOtherComponent
}, {
  path: 'post',
  component: AppPostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
