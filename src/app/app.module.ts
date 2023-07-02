import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TestComponent } from './test-shell/test.component';

import { CustomBreakPointsProvider, CUSTOM_HEIGHT_BREAKPOINTS } from './layout/breakpoints';
import { CustomHideDirective } from './layout/custom-hide.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    FlexLayoutModule.withConfig({}, CUSTOM_HEIGHT_BREAKPOINTS )
  ],
  declarations: [ AppComponent, CustomHideDirective, TestComponent ],
  providers:    [ CustomBreakPointsProvider ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
