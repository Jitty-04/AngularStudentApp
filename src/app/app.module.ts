import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './studentEntry/student-entry.component';
import { ViewallComponent } from './viewall/viewall.component';

const myRouter:Routes=[
  {
    path:"",
    component:StudentEntryComponent

},

{
path:"view",
component:ViewallComponent

}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
