import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Artist } from '../models/artist.model';
import { SearchService } from '../services/search/search.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArtistDetailsComponent } from '../artist-details/artist-details.component';
import { ArtistService } from '../services/artist/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  artists$!: Observable<Artist[]>;
  private searchTerms = new Subject<string>();

  constructor(public searchApi: SearchService,
              public infoApi: ArtistService,
              public dialog: MatDialog) { }

  
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
    this.dialog.open(ArtistDetailsComponent, {
      width: 'auto',
      data: artist
    }); 
  }  
}
