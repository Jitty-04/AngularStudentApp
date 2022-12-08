import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './studentEntry/student-entry.component';
import { ViewallComponent } from './viewall/viewall.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './search/search.component';

const myRouter:Routes=[
  {
    path:"",
    component:StudentEntryComponent

},

{
path:"view",
component:ViewallComponent

},
{
  path:"search",
  component:SearchComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewallComponent,
    NavigationComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
