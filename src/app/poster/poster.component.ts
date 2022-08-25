import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { FirebaseUploadService } from '../services/firebase-upload.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
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

  // posters: any = [
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter1.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Crazy Governing Ourselves',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter2.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Dialogue is a Compromise',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter3.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Astonishing Idea That We Can Think ',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter4.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'A Government Better Than Us',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter5.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'We Know It Is There',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter6.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Pickle',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter7.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Donut',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter8.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Books Burning ',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter9.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Middle Finger ',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter10.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Congratulations On Your Voice',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter11.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Feelings Are Easy',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  //   {
  //     image:
  //       'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter12.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
  //     title: 'Cupackes',
  //     cost: '150',
  //     author: 'Ashok'
  //   },
  // ];

  // posters: any = [];

  posters: any = [];

  edit: boolean = false;
  ngOnInit(): void {
    this.dataService.getData().subscribe((val) => {
      this.posters = val[2];
    });
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

  editPoster(item: any, deleteIndex: number) {
    this.edit = true;
    this.form.title = item.title;
    this.form.cost = item.cost;
    this.form.author = 'Ashok';
    this.deleteIndex = deleteIndex;
  }

  addPoster() {
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

  deletePoster() {
    this.edit = false;
    this.posters.splice(this.deleteIndex, 1);
    this.dataService.addPoster('posters', this.posters);
  }

  savePoster() {
    if (this.deleteIndex !== -1) {
      this.posters[this.deleteIndex] = this.form;
    } else {
      this.posters.push(this.form);
    }
    this.dataService.addPoster('posters', this.posters);
  }

  closeEdit() {
    this.edit = false;
  }

  logout() {
    this.authService.setLoginStatus("false");
    this.router.navigate(['login']);
  }
}
