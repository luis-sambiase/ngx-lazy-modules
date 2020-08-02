import { NgModule } from '@angular/core';
import { NgxLazyModulesDoBootstrapModule } from '@wanoo21/ngx-lazy-modules';

import { OneComponent } from './one.component';
import { SharedModule } from '../shared/shared.module';
import { FooComponent } from './foo/foo.component';


@NgModule({
  declarations: [OneComponent, FooComponent],
  imports: [
    SharedModule
  ]
})
export class OneModule implements NgxLazyModulesDoBootstrapModule {
  bootstrapComponent = OneComponent;
}
