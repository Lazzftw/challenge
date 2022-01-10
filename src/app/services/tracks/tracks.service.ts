import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tracks } from 'src/app/models/tracks.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(public http: HttpClient) { }

  getTracks(name:string): Observable<Tracks[]>{

    const options ={
      params:new HttpParams()
      .set("method","artist.gettoptracks")
      .set("artist",name)
      .set("limit", 5)
      .set("api_key", environment.apiKey) 
      .set("format","json")
      }
      return this.http.get<Tracks[]>(environment.apiUrl,options)
        .pipe(
          map((data: any) => {
            return data.toptracks.track;
          })
        )
      }    
}
