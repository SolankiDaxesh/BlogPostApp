import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/posts.model';
import { PostsService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private postService: PostsService) { }
  posts:Post[]=[];
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      response => { this.posts=response;
        console.log(response); },
    )

  }

}
