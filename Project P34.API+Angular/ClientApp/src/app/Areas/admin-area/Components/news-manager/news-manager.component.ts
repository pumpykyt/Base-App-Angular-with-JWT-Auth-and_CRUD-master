import { Component, OnInit } from '@angular/core';
import { NewsArticle } from "../../Models/news-article.model";
import { NewsService } from "../../Services/news.service";
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { ApiResult } from '../../../../Models/result.model';

@Component({
  selector: 'app-news-manager',
  templateUrl: './news-manager.component.html',
  styleUrls: ['./news-manager.component.css']
})
export class NewsManagerComponent implements OnInit {

  constructor(private newsService: NewsService, private spinner: NgxSpinnerService, private notifier: NotifierService) { }

  ngOnInit() {
  }

  newsObj = new NewsArticle();


  addNews(){
    this.newsService.postDefaultNews(this.newsObj).subscribe(
      (data : ApiResult) => {
        if(data.status === 200){
          this.notifier.notify('success', 'User added');
        }else{
          for(var i = 0; i < data.errors; i++){
            this.notifier.notify('error', data.errors[i])
          }
        }
        this.spinner.hide();
      }
  )}
}
