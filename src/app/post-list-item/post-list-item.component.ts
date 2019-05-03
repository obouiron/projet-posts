import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-postlistitem',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    // tslint:disable-next-line: variable-name
    @Input() created_at: Date;

    constructor() { }

    ngOnInit() {
    }

    loveIt() {
        ++this.loveIts;
    }

    dontLoveIt() {
        --this.loveIts;
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
        return this.loveIts > 0;
    }
    hasMoreDontLoveIt(): boolean {
        return this.loveIts < 0;
    }
}
