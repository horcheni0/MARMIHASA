import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatMenuModule }   from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppbarComponent } from './appbar/appbar.component';

import { ModelComponent } from './model/model.component';
import { StoComponent } from './sto/sto.component';
import { Model1Component } from './model1/model1.component';
import { Model2Component } from './model2/model2.component';
import { Model3Component } from './model3/model3.component';
import { Model4Component } from './model4/model4.component';
import { TechComponent } from './tech/tech.component';
import { StoneComponent } from './stone/stone.component';
import { DessignComponent } from './dessign/dessign.component';
import { HomemodelComponent } from './homemodel/homemodel.component';
import { FootComponent } from './foot/foot.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { ImgbeginComponent } from './imgbegin/imgbegin.component';
import { Home2Component } from './home2/home2.component';
import { Stonemodel1Component } from './stonemodel1/stonemodel1.component';
import { Stonemodel2Component } from './stonemodel2/stonemodel2.component';
import { Stonemodel3Component } from './stonemodel3/stonemodel3.component';
import { Stonemodel4Component } from './stonemodel4/stonemodel4.component';
import { DesignComponent } from './design/design.component';

const ROUTES: Routes = [

  {path:'', component:HomeComponent},
  {path:'model1',component:Model1Component},
  {path:'model2',component:Model2Component},
  {path:'model3',component:Model3Component},
  {path:'model4',component:Model4Component},
  {path:'home',component:HomeComponent},
  {path:'test2',component:Test2Component},
  {path:'test',component:TestComponent},
  {path:'test3',component:Test3Component},
  {path: 'stone',component:StoneComponent},
  {path: 'dessign',component:DessignComponent},
  {path:'tech',component:TechComponent},
  {path:'contact',component:FootComponent},
  
  






 




 
];

export function httpTranslateLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
    HeaderComponent,
    AppbarComponent,
  
    ModelComponent,
    StoComponent,
    Model1Component,
    Model2Component,
    Model3Component,
    Model4Component,
    TechComponent,
    StoneComponent,
    DessignComponent,
    HomemodelComponent,
    FootComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    ImgbeginComponent,
    Home2Component,
    Stonemodel1Component,
    Stonemodel2Component,
    Stonemodel3Component,
    Stonemodel4Component,
    DesignComponent,
  
   
   
   
   
  
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
    TranslateModule.forRoot(
      {
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoaderFactory,
        deps:[HttpClient]

      }
    }
    )
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
