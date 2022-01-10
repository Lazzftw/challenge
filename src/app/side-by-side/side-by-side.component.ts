import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Artist } from '../models/artist.model';
import { Info } from '../models/artist.info';
import { Tracks } from '../models/tracks.model';
import { Albums } from '../models/albums.model';
import { SearchService } from '../services/search/search.service';
import { ArtistService } from '../services/artist/artist.service';
import { TracksService } from '../services/tracks/tracks.service';
import { AlbumsService } from '../services/albums/albums.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {

  private searchTerms = new Subject<string>();
  artists$!: Observable<Artist[]>;
  tracks! : Tracks[];
  albums! : Albums[];
  infos!: Info
  isShown : boolean = false

  constructor(public searchApi: SearchService,
              public infoApi:  ArtistService,
              public trackApi: TracksService,
              public albumApi: AlbumsService,) { }

              
    ngOnInit(): void {
        this.artists$ = this.searchTerms.pipe(

        debounceTime(300),

        distinctUntilChanged(),

        switchMap((term: string) => this.searchApi.search(term)),
        );
      }

    search(term: any): void {
      this.searchTerms.next(term);
    }
   
    onSelect(artist:Artist): void{
      this.isShown=true;
      this.getinfo(artist.name)            
    }  

    getinfo(name:string) {
      this.infoApi.getInfo(name)
      .subscribe((data:Info) => {
        this.infos = data;
      });
    }  
} 
