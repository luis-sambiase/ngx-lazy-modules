import { Type, NgModuleRef, StaticProvider } from '@angular/core';

export interface NgxLazyModule { slug: string; loadModule: () => Promise<Type<NgxLazyModulesDoBootstrapModule>>; }
export interface NgxLazyLoadModulesConfig {
    lazyModules: NgxLazyModule[];
}
export interface INgxLazyLoadModules {
    load(currentSlug: string): Promise<NgModuleRef<any>>;
}
export interface IEventAndStaticProviders {
    globalFunctionName?: string;
    defaultSlug?: string;
    staticProvider?: StaticProvider[];
}
export interface NgxLazyModulesDoBootstrapModule {
    bootstrapComponent: Type<any>;
}
