import { Component, OnInit } from '@angular/core';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Artist } from '../models/artist.model';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-main-artist',
  templateUrl: './main-artist.component.html',
  styleUrls: ['./main-artist.component.scss']
})
export class MainArtistComponent implements OnInit {
  isLoadingUsers!: boolean;
  artists! : Artist[];
  selectedArtist!: Artist;
  selectedCountry: string = "spain";

  constructor(public rest: ArtistService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoadingUsers= true;
    this.getArtistList(this.selectedCountry)
  }

  selectChangeHandler (event: any) {
    this.selectedCountry = event.target.value;
    this.getArtistList(this.selectedCountry)
  }

  getArtistList(code:string) {
    this.rest.getArtists(code)
      .subscribe((data:Artist[]) => {
        this.artists = data;
        this.isLoadingUsers=false;
    })
  }

  onSelect(artist: Artist): void {
      this.selectedArtist = artist;
      this.openDialog()
  }

  openDialog(): void {
    this.dialog.open(ArtistDetailsComponent, {
      width: 'auto',
      data: this.selectedArtist 
    });
  }
}
