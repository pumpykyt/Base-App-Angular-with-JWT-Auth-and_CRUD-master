import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Areas/admin-area/Services/news.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { NewsArticle } from '../Areas/admin-area/Models/news-article.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private newsService: NewsService, private spinner: NgxSpinnerService, private notifier: NotifierService) { }

  listOfData : NewsArticle[] = [];

  ngOnInit() {
    this.spinner.show();
    
    this.newsService.getAllNews().subscribe
    (
      (AllUsers: NewsArticle[]) => {
        this.listOfData = AllUsers;
        this.spinner.hide();
      }
    )
    
  }

}
