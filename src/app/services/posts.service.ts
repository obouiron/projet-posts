import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';
import { Subject } from 'rxjs';

@Injectable()
export class PostsService {

    // tslint:disable-next-line: max-line-length
    posts = [new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 0, new Date())
        ,
    // tslint:disable-next-line: max-line-length
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 0, new Date())
        ,
    // tslint:disable-next-line: max-line-length
    new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo', 0, new Date())
    ];

    postsSubject = new Subject<Post[]>();

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePosts() {
        //Rien pour le moment
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    addLoveIt(post: Post) {
        ++post.loveIts;
    }

    removeLoveIt(post: Post) {
        --post.loveIts;
    }
}