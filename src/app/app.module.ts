// először a gyári beépített modulokat importáljuk be
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // import után még fel kell venni az imports tömbbe
import { HttpClientModule } from '@angular/common/http'; // import után még fel kell venni az imports tömbbe
import { RouterModule, Routes } from '@angular/router'; // a routinghoz kell
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // az ngModel-hez kell

// utána a saját componenseinekt, direktíváinkat
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PrefixPipe } from './pipe/prefix.pipe';
import { DelayDirective } from './directive/delay.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { FootballService } from './service/football.service'; // import után még fel kell venni a providers tömbbe, de még jobb, ha először ott vesszük fel, mert a vs akkor automatice beimportálja
import { HeroService } from './service/hero.service'; // import után még fel kell venni a providers tömbbe, de még jobb, ha először ott vesszük fel, mert a vs akkor automatice beimportálja
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionComponent } from './question/question.component';
import { QuestionControlService } from './qform/question-control-service';

// a routinghoz kell:
const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hero",
    component: HeroComponent
  },
  {
    path: "hero/add",
    component: AddHeroComponent
  },
  {
    path: "hero/:id",
    component: HeroDetailComponent
  },
  {
    path: "questions",
    component: QuestionComponent
  },
  {
    path: "**", // itt azt állítom be, hogy bármi más, mint home vagy hero
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PrefixPipe,
    DelayDirective,
    HighlightDirective,
    NavComponent,
    AddHeroComponent,
    DynamicFormQuestionComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    FootballService,
    HeroService,
    QuestionControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
