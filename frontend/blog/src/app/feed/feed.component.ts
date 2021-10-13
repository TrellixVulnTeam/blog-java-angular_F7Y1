import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = [];
  post: Post = new Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts () {
    this.postService.getPost().subscribe((data: any) => {
      this.listPost = data;
    })
  }

  createPost () {
    this.postService.postPost(this.post).subscribe((data: any)=>{
      this.post = data,
      location.assign("/feed")
    })
  }

}
