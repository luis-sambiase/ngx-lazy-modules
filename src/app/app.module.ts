import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLazyModulesDoBootstrapModule } from '@wanoo21/ngx-lazy-modules';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // NoopAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule implements NgxLazyModulesDoBootstrapModule {
  bootstrapComponent = AppComponent;
}
