import { Type, StaticProvider, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export interface LazyModules { slug: string, loadModule: () => Promise<Type<any>> }

export function ngxLazyLoadModules(lazyModules: LazyModules[], { globalFunctionName = 'ngxLazyModulesLoaded', staticProvider }: {
    globalFunctionName?: string,
    staticProvider?: StaticProvider[]
}) {
    const returnObj = {
        async load(current_slug: string) {
            try {
                const loadModule = lazyModules.find(({ slug }) => [current_slug, '**'].includes(slug))
                const module = await loadModule.loadModule()
                return platformBrowserDynamic(staticProvider).bootstrapModule(module)
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