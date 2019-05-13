import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.models';
import { PostsService } from '../services/posts.service';

@Component({
    selector: 'app-postlistitem',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() post: Post;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
    }

    loveIt() {
        this.postsService.addLoveIt(this.post);
    }

    dontLoveIt() {
        this.postsService.removeLoveIt(this.post);
    }

    getColor() {
        if (this.hasMoreLoveIt()) {
            return 'green';
        } else if (this.hasMoreLoveIt()) {
            return 'red';
        } else {
            return 'black';
        }
    }

    hasMoreLoveIt(): boolean {
        return this.post.loveIts > 0;
    }

    hasMoreDontLoveIt(): boolean {
        return this.post.loveIts < 0;
    }

    deletePost() {
        this.postsService.removePost(this.post);
    }
}
