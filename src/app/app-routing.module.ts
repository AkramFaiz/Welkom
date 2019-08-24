import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'dashboard', loadChildren: '../app/add-new-items/add-new-items.module#AddNewItemsModule', canActivate: [AuthGuard] },
  // { path: 'mycart', component: MyCartComponent,
    //  children: [ { path: 'paint', component: PaintCartComponent},
                  // { path: 'photo', component: PhotoCartComponent } ]
  // },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
