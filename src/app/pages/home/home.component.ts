import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/app/interfaces/comments';
import { News } from 'src/app/interfaces/news';
import { CommentsService } from 'src/app/services/comments.service';
import { NewsService } from 'src/app/services/news.service';
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   news: News[] = [];
   comments: Comments[] = [];;

  constructor(
    private commentService: CommentsService,
    private newsService: NewsService,
  ) { }

  ngOnInit(): void {
    this.allComments();
    this.allNews();
  }

  allComments(){
    this.commentService.getAllComments()
        .subscribe(res => {
          this.comments= res.data;
          console.log(this.comments);

        })
  }
  allNews(){
    this.newsService.getAllNews()
        .subscribe(res => {
          this.news= res.data;
          console.log(this.news);
        })
  }


}
