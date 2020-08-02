import { Component, ViewChild, ViewContainerRef, Compiler, Injector, Inject, ComponentRef, ComponentFactoryResolver } from '@angular/core';

import { NgxLazyLoadModulesConfig } from './interfaces';
import { NgxLazyLoadModulesToken } from './tokens';

@Component({
  selector: 'lib-ngx-lazy-modules',
  template: `
    <ng-template #lazy><ng-template>
  `,
  styles: []
})
export class NgxLazyModulesComponent {
  @ViewChild('lazy', { read: ViewContainerRef, static: true }) lazyView: ViewContainerRef;
  private dynamicComponentRef: ComponentRef<any>;

  constructor(
    @Inject(NgxLazyLoadModulesToken) private config: NgxLazyLoadModulesConfig,
    private componentFactoryresolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private injector: Injector
  ) { }

  async load(currentSlug: string): Promise<ComponentRef<any>> {
    const loadModule = this.config.lazyModules.find(({ slug }) => [currentSlug, '**'].includes(slug));
    const module = await loadModule.loadModule();
    const moduleFactory = await this.compiler.compileModuleAsync(module);
    const moduleRef = moduleFactory.create(this.injector);
    const componentFactory = this.componentFactoryresolver.resolveComponentFactory(moduleRef.instance.bootstrapComponent);
    this.lazyView.clear();
    this.dynamicComponentRef = this.lazyView.createComponent(componentFactory, null, moduleRef.injector);
    this.dynamicComponentRef.changeDetectorRef.detectChanges();
    return this.dynamicComponentRef;
  }

  addData(data: any): void {
    const { instance, changeDetectorRef } = this.dynamicComponentRef;
    instance.ngxLazyLoadModuleData = data;
    changeDetectorRef.detectChanges();
    // this.dynamicComponentRef.instance.ngOnChanges?.();
  }

}
