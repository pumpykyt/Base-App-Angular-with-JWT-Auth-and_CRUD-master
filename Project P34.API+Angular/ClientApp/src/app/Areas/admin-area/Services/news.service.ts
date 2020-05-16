import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { id_ID } from 'ng-zorro-antd/i18n/public-api';
import { NewsArticle } from '../Models/news-article.model';
import { ApiResult } from 'src/app/Models/result.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'api/newsmanager';
  constructor(private http: HttpClient) { }

  getAllNews(){
    return this.http.get(this.baseUrl);
  }

  postDefaultNews(model : NewsArticle){
    return this.http.post<ApiResult>(this.baseUrl + '/add/', model);
  }



}
