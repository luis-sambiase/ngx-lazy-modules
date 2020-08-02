import { NgModule, ApplicationRef, ComponentRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgxLazyModulesComponent } from './ngx-lazy-modules.component';

@NgModule({
  declarations: [NgxLazyModulesComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  // exports: [NgxLazyModulesComponent]
})
export class NgxLazyModulesModule {
  private componentRef: ComponentRef<NgxLazyModulesComponent>;

  ngDoBootstrap(applicationRef: ApplicationRef): void {
    this.componentRef = applicationRef.bootstrap(NgxLazyModulesComponent);
  }

  getComponent(): ComponentRef<NgxLazyModulesComponent> {
    return this.componentRef;
  }
}
