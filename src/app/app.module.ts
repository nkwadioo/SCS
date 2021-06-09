import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { StorageServiceModule } from 'ngx-webstorage-service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';



const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatTableModule, MatDatepickerModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatProgressBarModule, MatSnackBarModule, MatSliderModule, MatSlideToggleModule, MatSidenavModule, MatSelectModule, MatRippleModule, MatRadioModule, MatMenuModule, MatDialogModule, MatListModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatGridListModule, MatTabsModule, MatTooltipModule, MatStepperModule, MatNativeDateModule, MatToolbarModule, MAT_DATE_LOCALE } from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { OverlayModule } from '@angular/cdk/overlay';
import { BidiModule } from '@angular/cdk/bidi';
import { CdkTableModule } from '@angular/cdk/table';
import { A11yModule } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './shared/confirm/confirm.component';
import { AlertComponent } from './shared/alert/alert.component';
import { WarningComponent } from './shared/warning/warning.component';
import { ContinueComponent } from './shared/continue/continue.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { LoadingComponent } from './loading/loading.component';
import { LayoutModule } from '@angular/cdk/layout';

// import { DialogFormComponent } from './dialog/dialog-form/dialog-form.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
      // Material Modules
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTableModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatSnackBarModule,
      MatSortModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatNativeDateModule,
      MatStepperModule,
      CdkTableModule,
      A11yModule,
      BidiModule,
      ObserversModule,
      OverlayModule,
      PlatformModule,
      PortalModule,
      MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      MatSortModule,
      MatTableModule,
      MatCardModule,
      MatProgressBarModule,
      MatDialogModule,
      SlideshowModule,
      // StorageServiceModule

  ],
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
    AlertComponent,
    WarningComponent,
    ContinueComponent,
    LoadingComponent

    // DialogFormComponent
  ],
  entryComponents: [
    ConfirmComponent,
    AlertComponent,
    WarningComponent,
    ContinueComponent
  ],
  providers: [{

    provide: LocationStrategy,
    useClass: HashLocationStrategy,

  }, { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  { provide: LOCALE_ID, useValue: 'en-GB' }],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
