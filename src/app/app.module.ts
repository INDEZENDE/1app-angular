import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule } from '@angular/material';
import { N2Component } from './n2/n2.component';
import { N3Component } from './n3/n3.component';
import { N1Component } from './n1/n1.component';


const appRoutes: Routes = [
  {path: 'news1', component: N1Component},
  {path: 'news2', component: N2Component},
  {path: 'news3', component: N3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    N2Component,
    N3Component,
    N1Component
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
