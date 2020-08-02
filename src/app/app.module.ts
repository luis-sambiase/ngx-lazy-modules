import { NgModule } from '@angular/core';
import { NgxLazyModulesDoBootstrapModule } from '@wanoo21/ngx-lazy-modules';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements NgxLazyModulesDoBootstrapModule {
  bootstrapComponent = AppComponent;
}
