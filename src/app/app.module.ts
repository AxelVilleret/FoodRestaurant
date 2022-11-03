import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAuthenComponent } from './admin-authen/admin-authen.component';
import { AdminRegstrationComponent } from './admin-regstration/admin-regstration.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './add-product/edit-product.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CommandsComponent } from './commands/commands.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommandCardComponent } from './command-card/command-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminAuthenComponent,
    AdminRegstrationComponent,
    HomeComponent,
    EditProductComponent,
    ProductCardComponent,
    ProductEditComponent,
    CommandsComponent,
    NavbarComponent,
    CommandCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
