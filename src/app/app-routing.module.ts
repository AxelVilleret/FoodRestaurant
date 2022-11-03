import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthenComponent } from './admin-authen/admin-authen.component';
import { AdminRegstrationComponent } from './admin-regstration/admin-regstration.component';
import { EditProductComponent } from './add-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuthGuard } from './service/auth/auth.guard';
import { CommandsComponent } from './commands/commands.component';

const routes: Routes = [
  { path: '', component:AdminAuthenComponent },
  { path: 'signup', component: AdminRegstrationComponent } ,
  { path: 'editProduct', canActivate: [AuthGuard], component: EditProductComponent},
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  { path: 'edit', canActivate: [AuthGuard], component: ProductEditComponent},
  { path: 'commands', canActivate: [AuthGuard], component: CommandsComponent },
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
