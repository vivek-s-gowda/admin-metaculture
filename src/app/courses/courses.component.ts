import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { FirebaseUploadService } from '../services/firebase-upload.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private firebaseUploadService: FirebaseUploadService,
    private authService: AuthService,
    private router: Router
  ) {}

  form: any = {
    title: '',
    image: '',
    tag: '',
    cost: '',
    descripton: '',
    author: 'Ashok',
  };

  deleteIndex: number = -1;
  disableSave: boolean = true;

  courses: any = [];

  edit: boolean = false;
  ngOnInit(): void {
    this.dataService.getData().subscribe((val) => {
      this.courses = val[1];
    });

    // this.dataService.addPoster('courses', this.courses);
    // this.dataService.addPoster('posters', this.posters)
    // this.dataService.getPosters()
  }

  async uploadPhoto(event: any) {
    this.disableSave = true;
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
      (res: any) => {
        console.log(res);
        this.form.image = res;
        this.disableSave = false;
      },
      (error: any) => {
        console.log('Error occured');
      }
    );
  }

  editCourse(item: any, deleteIndex: number) {
    this.edit = true;
    this.form.title = item.title;
    this.form.cost = item.cost;
    this.form.author = 'Ashok';
    this.deleteIndex = deleteIndex;
  }

  addCourse() {
    this.form = {
      title: '',
      image: '',
      tag: '',
      cost: '',
      descripton: '',
      author: 'Ashok',
    };
    this.edit = true;
    this.deleteIndex = -1;
  }

  deleteCourse() {
    this.edit = false;
    this.courses.splice(this.deleteIndex, 1);
    this.dataService.addPoster('courses', this.courses);
  }

  saveCourse() {
    if (this.deleteIndex !== -1) {
      this.courses[this.deleteIndex] = this.form;
    } else {
      this.courses.push(this.form);
    }
    this.dataService.addPoster('courses', this.courses);
  }

  closeEdit() {
    this.edit = false;
  }

  logout() {
    this.authService.setLoginStatus("false");
    this.router.navigate(['login']);
  }
}
