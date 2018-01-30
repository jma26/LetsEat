import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { WriteComponent } from './write/write.component';
import { ReviewComponent } from './review/review.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'reviews/:id', component: ReviewComponent },
  { path: 'write/:id', component: WriteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
