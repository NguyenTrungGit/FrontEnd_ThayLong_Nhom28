import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})

export class CommentItemComponent implements OnInit {
  @Input() comment?: Comment;
  constructor() {}

  ngOnInit(): void {}
}
