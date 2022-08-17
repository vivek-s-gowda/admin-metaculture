import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  constructor() { }
  courses = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8]

  edit: boolean = false
  ngOnInit(): void {
  }

}
