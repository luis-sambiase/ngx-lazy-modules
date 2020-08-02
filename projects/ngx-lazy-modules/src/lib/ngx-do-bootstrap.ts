import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxLazyModulesModule } from './ngx-lazy-modules.module';
import { NgxLazyModulesComponent } from './ngx-lazy-modules.component';
import { NgxLazyModule, IEventAndStaticProviders } from './interfaces';
import { NgxLazyLoadModulesToken } from './tokens';

export async function ngxLazyLoadModules(
    lazyModules: NgxLazyModule[],
    eventAndStaticProviders?: IEventAndStaticProviders
): Promise<NgxLazyModulesComponent> {
    const { globalFunctionName, staticProvider = [], defaultSlug = '**' } = eventAndStaticProviders || {};
    const moduleRef = await platformBrowserDynamic([
        { provide: NgxLazyLoadModulesToken, useValue: { lazyModules } },
        ...staticProvider
    ]).bootstrapModule(NgxLazyModulesModule);

    const { instance } = moduleRef.instance.getComponent();
    // Load default route
    await instance.load(defaultSlug);
    globalThis[globalFunctionName || 'ngxLazyModulesLoaded']?.(instance);
    return instance;
}
