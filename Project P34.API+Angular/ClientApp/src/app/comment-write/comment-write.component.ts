import { Component, OnInit } from '@angular/core';
import { CommentService } from '../Areas/admin-area/Services/comment.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { ApiResult } from '../Models/result.model';
import { CommentModel } from '../Areas/admin-area/Models/comment.model';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-write',
  templateUrl: './comment-write.component.html',
  styleUrls: ['./comment-write.component.css']
})
export class CommentWriteComponent implements OnInit {

  
  constructor(private router: Router,private commentService: CommentService, private spinner: NgxSpinnerService, private notifier: NotifierService) { }
  ngOnInit() {
    
  }
  comment = new CommentModel();
  public thisUrl: string;
  addComment(){
    this.spinner.show();
    this.thisUrl = this.router.url;
    var token = localStorage.getItem('token');
    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    const decodedJwtData = JSON.parse(decodedJwtJsonData);
    this.comment.userId = decodedJwtData.id;
    this.comment.ArticleId = parseInt(this.thisUrl.replace(/[\D]/g, ''));
    this.commentService.postComment(this.comment).subscribe(
      (data : ApiResult) => {
        if(data.status === 200){
          this.notifier.notify('success', 'Comment posted');
          this.commentService.isSendedComment.emit(true);
        }else{
          for(var i = 0; i < data.errors; i++){
            this.notifier.notify('error', data.errors[i])
          }
        }
        this.spinner.hide();
      }
  )}

}
