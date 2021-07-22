import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../../shared/interfaces/post';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public posts!: Post[]

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.LoadLatestPosts().subscribe((data) => { this.posts = data });
  }
}
