import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config, ConfigService } from './config.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ConfigService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: Config): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: Config, useValue: config }
      ]
    };
  }
}
