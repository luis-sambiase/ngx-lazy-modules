import { Component, ViewChild, ViewContainerRef, Compiler, Injector, Inject, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { NgxLazyLoadModulesConfig } from './interfaces';
import { NgxLazyLoadModulesToken } from './tokens';

@Component({
  selector: 'lib-ngx-lazy-modules',
  template: `
    <ng-template #lazy><ng-template>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.Default
})
export class NgxLazyModulesComponent implements OnDestroy {
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
    this.dynamicComponentRef = this.lazyView.createComponent(componentFactory, null, moduleRef.injector, null, moduleRef);
    // this.dynamicComponentRef.hostView.detectChanges();
    // this.dynamicComponentRef.changeDetectorRef.detectChanges();
    return this.dynamicComponentRef;
  }

  addData(data: any): void {
    const { instance, hostView } = this.dynamicComponentRef;
    instance.ngxLazyLoadModuleData = data;
    hostView.detectChanges();
    // this.dynamicComponentRef.instance.ngOnChanges?.();
  }

  ngOnDestroy(): void {
    if (this.dynamicComponentRef) {
      this.dynamicComponentRef.destroy();
    }
  }

}
