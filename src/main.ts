import { enableProdMode } from '@angular/core';
import { ngxLazyLoadModulesPlatformBrowserDynamic, NgxLazyModule } from '@wanoo21/ngx-lazy-modules';

import { environment } from './environments/environment';
// import { AppModule } from './app/app.module';
import { RootModule } from './app/root.module';

if (environment.production) {
  enableProdMode();
}

const lazyModules: NgxLazyModule[] = [
  {
    slug: 'one',
    loadModule: () => import('./app/one/one.module').then(m => m.OneModule)
  },
  {
    slug: 'two',
    loadModule: () => import('./app/two/two.module').then(m => m.TwoModule)
  },
  // {
  //   slug: '**',
  //   loadModule: () => import('./app/one/one.module').then(m => m.OneModule)
  // },
  {
    slug: '**',
    loadModule: () => import('./app/app.module').then(m => m.AppModule)
  },
];

ngxLazyLoadModulesPlatformBrowserDynamic(lazyModules)(RootModule)
  .catch(error => console.error(error));

