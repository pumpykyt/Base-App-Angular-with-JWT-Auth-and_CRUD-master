import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResult } from 'src/app/Models/result.model';
import { CommentModel } from '../Models/comment.model';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  isSendedComment = new EventEmitter<boolean>();
  baseUrl = 'api/commentmanager';
  constructor(private http: HttpClient) { }

  getAllComments(){
    return this.http.get(this.baseUrl);
  }

  getCommentsByArticleId(id: number){
    return this.http.get(this.baseUrl + '/get/' + id);
  }

  postComment(model : CommentModel){
    return this.http.post<ApiResult>(this.baseUrl + '/add/', model);
  }

  getNameByCommentId(id: number){
    return this.http.get(this.baseUrl + '/get/comment/' + id);
  }


}
