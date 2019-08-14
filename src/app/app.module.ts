import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';

@NgModule({
   bootstrap:    [AppComponent],
   declarations: [AppComponent],
   imports:      [BrowserModule, BrowserAnimationsModule, NgSqUiModule]
})
export class AppModule {
}