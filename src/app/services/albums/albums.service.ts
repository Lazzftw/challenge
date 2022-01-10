import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Albums } from 'src/app/models/albums.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(public http: HttpClient) { }

  getAlbums(name:string):Observable<Albums[]> {

    const options ={
      params:new HttpParams()
      .set("method","artist.gettopalbums")
      .set("artist",name)
      .set("limit", 5)
      .set("api_key", environment.apiKey) 
      .set("format","json")
      }
      return this.http.get<Albums[]>(environment.apiUrl,options)
      .pipe(
          map((data: any) => {
            return data.topalbums.album;
          })
        )
      }  
}
