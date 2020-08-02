import { enableProdMode } from '@angular/core';
import { ngxLazyLoadModules, NgxLazyModule } from '@wanoo21/ngx-lazy-modules';

import { environment } from './environments/environment';

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
  {
    slug: '**',
    loadModule: () => import('./app/app.module').then(m => m.AppModule)
  }
];

ngxLazyLoadModules(lazyModules)
  .catch(error => console.error(error));

