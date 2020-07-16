import { Type, StaticProvider, ApplicationRef, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export interface NgxLazyModule { slug: string, loadModule: () => Promise<Type<any>> }

export function ngxLazyLoadModules(lazyModules: NgxLazyModule[], { globalFunctionName = 'ngxLazyModulesLoaded', staticProvider }: {
    globalFunctionName?: string,
    staticProvider?: StaticProvider[]
}) {
    let prevModuleRef = null as NgModuleRef<any>
    const returnObj = {
        async load(current_slug: string) {
            try {
                if (prevModuleRef) {
                    prevModuleRef.destroy()
                }
                const loadModule = lazyModules.find(({ slug }) => [current_slug, '**'].includes(slug))
                const module = await loadModule.loadModule()
                return platformBrowserDynamic(staticProvider).bootstrapModule(module).then(moduleRef => {
                    return prevModuleRef = moduleRef
                })
            } catch (error) {
                throw new Error(error)
            }
        }
    }
    globalThis[globalFunctionName]?.(returnObj)
    return returnObj
}

export abstract class NgxDoBootstrapModule {
    abstract bootstrapComponent: Type<any>
    rootSelectorOrNode = 'app-root'

    ngDoBootstrap(applicationRef: ApplicationRef) {
        applicationRef.bootstrap(this.bootstrapComponent, this.rootSelectorOrNode)
    }
}