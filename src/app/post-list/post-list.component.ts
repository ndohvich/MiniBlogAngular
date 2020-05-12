import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  nombreJaime: number = 0;
  nombreNon: number = 0;

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: string;

  constructor() {}

  onClick(){
    this.nombreJaime += 1;
    this.loveIts += 1;
    return this.nombreJaime;
  }

  noClick(){
    this.nombreNon -= 1;
    this.loveIts -= 1;
    return this.nombreNon;  
  }

  ngOnInit() {
  }

}
