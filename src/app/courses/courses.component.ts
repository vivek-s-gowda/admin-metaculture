import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  courses = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8]

  edit: boolean = false
  ngOnInit(): void {
  }

}
