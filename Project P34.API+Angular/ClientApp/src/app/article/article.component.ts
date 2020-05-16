import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../Areas/admin-area/Services/news.service';
import { NewsArticle } from '../Areas/admin-area/Models/news-article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private newsService: NewsService, private router: Router) {
   }

  thisUrl: string;
  id: number;
  listOfData: NewsArticle[] = [];
  currentArticle = new NewsArticle();

  ngOnInit() {
    
    this.thisUrl = this.router.url;
    this.id = parseInt(this.thisUrl.replace(/[\D]/g, '')) - 1;
    this.currentArticle = this.listOfData[this.id];
    this.newsService.getAllNews().subscribe
    (
      (AllUsers: NewsArticle[]) => {
        this.listOfData = AllUsers;
        console.log(this.router.url);
      }
    )
  }

}
