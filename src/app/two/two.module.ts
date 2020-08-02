import { NgModule } from '@angular/core';
import { NgxLazyModulesDoBootstrapModule } from '@wanoo21/ngx-lazy-modules';

import { TwoComponent } from './two.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
  ]
})
export class TwoModule implements NgxLazyModulesDoBootstrapModule {
  bootstrapComponent = TwoComponent;
}
