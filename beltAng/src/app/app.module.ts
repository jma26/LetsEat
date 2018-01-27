import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { WriteComponent } from './write/write.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    WriteComponent,
    HomeComponent,
    ReviewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
