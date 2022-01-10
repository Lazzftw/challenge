import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Albums } from '../models/albums.model';
import { Info } from '../models/artist.info';
import { Tracks } from '../models/tracks.model';
import { AlbumsService } from '../services/albums/albums.service';
import { ArtistService } from '../services/artist/artist.service';
import { TracksService } from '../services/tracks/tracks.service';


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  tracks! : Tracks[];
  albums! : Albums[];
  infos! : Info;
  
  constructor(public dialogRef: MatDialogRef<ArtistDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public trackApi: TracksService,
              public albumApi: AlbumsService,
              public infoApi: ArtistService) {

                this.getinfo(this.data.name)            
                this.getTrackList(this.data.name)
                this.getAlbumList(this.data.name)              
               }

  ngOnInit(): void {
  }

  getTrackList(name:string) {
    this.trackApi.getTracks(name)
      .subscribe((data:Tracks[]) => {
        this.tracks = data;
    });
  }

  getAlbumList(name:string) {
    this.albumApi.getAlbums(name)
      .subscribe((data:Albums[]) => {
        this.albums = data;
    });
  }

  getinfo(name:string) {
    this.infoApi.getInfo(name)
    .subscribe((data:Info) => {
      this.infos = data;
    });
  }  

}
