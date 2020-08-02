import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLazyModulesModule } from '@wanoo21/ngx-lazy-modules';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule
  ]
})
export class RootModule extends NgxLazyModulesModule { }
