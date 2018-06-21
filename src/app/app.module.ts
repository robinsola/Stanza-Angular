import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { PoemComponent } from './poem/poem.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SearchComponent,
    ResultsComponent,
    PoemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
