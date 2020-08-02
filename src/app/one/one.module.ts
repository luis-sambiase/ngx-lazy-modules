import { NgModule } from '@angular/core';
import { NgxLazyModulesDoBootstrapModule } from '@wanoo21/ngx-lazy-modules';

import { OneComponent } from './one.component';
import { FooComponent } from './foo/foo.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [OneComponent, FooComponent],
  imports: [
    CommonModule
  ]
})
export class OneModule implements NgxLazyModulesDoBootstrapModule {
  bootstrapComponent = OneComponent;
}
