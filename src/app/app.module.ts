import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HttpClientModule } from '@angular/common/http';
import { ObjectComponent } from './object/object.component';

import { StoreModule } from '@ngrx/store';
import { HeroFormComponent } from './hero-form/hero-form.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    CapitalizePipe,
    AComponentComponent,
    BComponentComponent,
    PageNotFoundComponent,
    ObjectComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot([
      {path: 'a', component: AComponentComponent},
      {path: 'b', component: BComponentComponent},
      {path: 'object', component: ObjectComponent},
      {path: '', redirectTo: '/a', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
