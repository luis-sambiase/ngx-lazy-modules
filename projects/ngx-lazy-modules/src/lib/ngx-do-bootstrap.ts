import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Type } from '@angular/core';

import { NgxLazyModulesModule } from './ngx-lazy-modules.module';
import { NgxLazyModulesComponent } from './ngx-lazy-modules.component';
import { NgxLazyModule, IEventAndStaticProviders } from './interfaces';
import { NgxLazyLoadModulesToken } from './tokens';

// tslint:disable-next-line: typedef
export function ngxLazyLoadModulesPlatformBrowserDynamic(
    lazyModules: NgxLazyModule[],
    eventAndStaticProviders?: IEventAndStaticProviders
) {
    const { globalFunctionName, staticProvider = [], defaultSlug = '**' } = eventAndStaticProviders || {};
    return async (appModule: Type<NgxLazyModulesModule>): Promise<NgxLazyModulesComponent> => {
        const moduleRef = await platformBrowserDynamic([
            { provide: NgxLazyLoadModulesToken, useValue: { lazyModules } },
            ...staticProvider
        ]).bootstrapModule(appModule);

        const { instance, hostView } = moduleRef.instance.getComponent();
        // Load default route
        await instance.load(defaultSlug);
        globalThis[globalFunctionName || 'ngxLazyModulesLoaded']?.(instance);
        hostView.detectChanges();
        return instance;
    };
}
