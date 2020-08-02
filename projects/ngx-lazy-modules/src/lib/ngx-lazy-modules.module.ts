import { NgModule, ApplicationRef, ComponentRef } from '@angular/core';

import { NgxLazyModulesComponent } from './ngx-lazy-modules.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxLazyModulesComponent],
  // imports: [
  //   CommonModule
  // ]
})
export abstract class NgxLazyModulesModule {
  private componentRef: ComponentRef<NgxLazyModulesComponent>;

  ngDoBootstrap(applicationRef: ApplicationRef): void {
    this.componentRef = applicationRef.bootstrap(NgxLazyModulesComponent);
  }

  getComponent(): ComponentRef<NgxLazyModulesComponent> {
    return this.componentRef;
  }
}
