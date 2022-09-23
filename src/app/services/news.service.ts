import { News } from './../interfaces/news';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const API_NEWS = environment.apiBaseLink + '/api/news/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    ) { }


    getAllNews( ){
      return this.httpClient.get<{success: boolean; data: News[]; count: number}>(API_NEWS+ 'get-all-news')
    }
}
