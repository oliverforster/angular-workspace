import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './Pages/gallery/gallery.component';
import { ShopComponent } from './Pages/shop/shop.component';

const routes: Routes = [
  {path: '', redirectTo: 'illustration', pathMatch: 'full'},
  {path: 'illustration', component: GalleryComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
