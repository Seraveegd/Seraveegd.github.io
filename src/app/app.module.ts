import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunewordsComponent } from './runewords/runewords.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
// import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './items/items.component';
import { CoreModule } from './core/core.module';
import { RecipesComponent } from './recipes/recipes.component';
import { DonateComponent } from './donate/donate.component';
import { AffixesComponent } from './affixes/affixes.component';
import { FiguresComponent } from './figures/figures.component';

@NgModule({
  declarations: [
    AppComponent,
    RunewordsComponent,
    HomeComponent,
    ItemsComponent,
    RecipesComponent,
    DonateComponent,
    AffixesComponent,
    FiguresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule,
    MatListModule,
    CoreModule.forRoot({
      api_base_url: 'https://seraveegd.github.io',
    })
  ],
  providers: [
    // { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
