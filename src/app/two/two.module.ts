import { NgModule } from '@angular/core';
import { NgxLazyModulesDoBootstrapModule } from '@wanoo21/ngx-lazy-modules';

import { TwoComponent } from './two.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    SharedModule
  ]
})
export class TwoModule implements NgxLazyModulesDoBootstrapModule {
  bootstrapComponent = TwoComponent;
}
