import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Comments } from '../interfaces/comments';
const API_COMMENT = environment.apiBaseLink + '/api/comments/';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    ) { }


    getAllComments( ){
      return this.httpClient.get<{success: boolean; data: Comments[]; count: number}>(API_COMMENT+ 'get-all-comments')
    }
}
