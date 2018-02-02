import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserDetail } from '../models/UserDetails';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../Constants';


@Injectable()
export class RestDataService {
  baseUrl: string;
  cache: UserDetail[];

  constructor(private http: HttpClient) { 
    this.baseUrl = Constants.baseUrl;
  }

  public getData(url = this.baseUrl,
    params?: HttpParams) {
    return this.http.get<UserDetail[]>(url, { params: params })
      .map((data) => { this.cache = data; return data; });
  }

  public put(data: UserDetail, url = this.baseUrl) {
    this.cache.push(data);
    return this.http.put(url, this.cache);
  }

  public verifyCache() {
    if(this.cache == undefined){
        this.getData().subscribe(()=>{})
      } 
  }
}
