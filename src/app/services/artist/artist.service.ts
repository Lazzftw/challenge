import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {  map } from "rxjs/operators";
import { Artist } from '../../models/artist.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Info } from 'src/app/models/artist.info';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  
  constructor(public http: HttpClient) { }

  getArtists(code:string): Observable<Artist[]> {
    const options ={
        params:new HttpParams()
        .set("method","geo.gettopartists")
        .set("country",code)
        .set("limit", 10)
        .set("api_key", environment.apiKey) 
        .set("format","json")
    }
    return this.http.get<Artist[]>(environment.apiUrl,options)
      .pipe(
          map((data: any) => {
            return data.topartists.artist;
          })
        )
      }

  getInfo(name:string): Observable<Info> {
    const options ={
      params:new HttpParams()
      .set("method","artist.getinfo")
      .set("artist",name)
      .set("limit", 5)
      .set("api_key", environment.apiKey) 
      .set("format","json")
    }     
    return this.http.get<Info>(environment.apiUrl,options)
      .pipe(
          map((data: any) => {
            return data.artist;
          })
        )
      } 
}
