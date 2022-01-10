import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainArtistComponent } from './main-artist/main-artist.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { SearchComponent } from './search/search.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    MainArtistComponent,
    ArtistDetailsComponent,
    SearchComponent,
    SideBySideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ArtistDetailsComponent]
})
export class AppModule { }
