import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(public http: HttpClient) { }

  search(name:string){

    const options ={
      params:new HttpParams()
      .set("method","artist.search")
      .set("artist",name)
      .set("limit", 5)
      .set("api_key", environment.apiKey) 
      .set("format","json")
}
    if (!name.trim()) {
      return of([]);
    }
    return this.http.get(environment.apiUrl,options)
     .pipe(
      map((data: any) => {
        return data.results.artistmatches.artist;
      }),
   );
}
}
