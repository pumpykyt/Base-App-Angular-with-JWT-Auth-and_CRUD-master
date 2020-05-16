import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Areas/admin-area/Services/news.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotifierService } from 'angular-notifier';
import { NewsArticle } from '../Areas/admin-area/Models/news-article.model';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  }

}
