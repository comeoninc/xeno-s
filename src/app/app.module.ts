import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgSqUiModule } from '@sq-ui/ng-sq-ui';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
   providers: [],
   bootstrap:    [AppComponent],
   declarations: [AppComponent],
   imports:      [BrowserModule, BrowserAnimationsModule, NgSqUiModule, FlexLayoutModule, AppRoutingModule]
})
export class AppModule { }