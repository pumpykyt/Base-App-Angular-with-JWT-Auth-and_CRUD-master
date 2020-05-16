import { Component, OnInit } from '@angular/core';
import { CommentService } from '../Areas/admin-area/Services/comment.service';
import { CommentModel } from '../Areas/admin-area/Models/comment.model';
import { Router } from '@angular/router';
import { UserManagerService } from '../Areas/admin-area/Services/user-manager.service';
import { UserItem } from '../Areas/admin-area/Models/user-item.model';

@Component({
  selector: 'app-comment-show',
  templateUrl: './comment-show.component.html',
  styleUrls: ['./comment-show.component.css']
})
export class CommentShowComponent implements OnInit {

  listOfData: CommentModel[] = [];
  listOfUsers: UserItem[] = [];
  thisUrl: string;
  articleid: number;
  
  constructor(private userService: UserManagerService, private commentService: CommentService, private router: Router) { }

  showUserName(id: number): string{
    var username = null;
    this.commentService.getNameByCommentId(id).subscribe(
      (data : string) => {
        username = data;
      }
    );
    return username;

  }

  ngOnInit() {
    this.listOfData = null;
    this.listOfUsers = null;
    this.thisUrl = this.router.url;
    this.articleid = parseInt(this.thisUrl.replace(/[\D]/g, ''));
    this.userService.getAllUsers().subscribe
      (
        (AllUsers: UserItem[]) => {
          this.listOfUsers = AllUsers;
        }
      );
    this.commentService.getCommentsByArticleId(this.articleid).subscribe
      (
        (AllComments: CommentModel[]) => {
          this.listOfData = AllComments;
        }
      );

    this.commentService.isSendedComment.subscribe(
      (data) => {
        this.commentService.getCommentsByArticleId(this.articleid).subscribe
          (
            (AllComments: CommentModel[]) => {
              this.listOfData = AllComments;
            }
          );
      }
    )



  }

}
