import { Component, OnInit } from '@angular/core';
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

    private firebaseUploadService: FirebaseUploadService
  ) {}

  posters: any = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter1.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Crazy Governing Ourselves',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter2.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Dialogue is a Compromise',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter3.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Astonishing Idea That We Can Think ',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter4.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'A Government Better Than Us',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter5.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'We Know It Is There',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter6.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Pickle',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter7.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Donut',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter8.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Books Burning ',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter9.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Middle Finger ',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter10.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Congratulations On Your Voice',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter11.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Feelings Are Easy',
      cost: '20',
      author: 'Ashok'
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/metaculture-studio.appspot.com/o/uploads%2Fposter12.png?alt=media&token=cfb5e7e8-8220-46ad-a279-718366e098c3',
      title: 'Cupackes',
      cost: '20',
      author: 'Ashok'
    },
  ];

  // posters: any = [];

  edit: boolean = false;
  ngOnInit(): void {
    // this.dataService.getPosters().subscribe((val) => {
    //   this.posters = val[0];
    // });
    this.dataService.addPoster('posters', this.posters)
    // this.dataService.getPosters()
  }

  async uploadPhoto(event: any) {
    this.firebaseUploadService.storeImage(event.target.files[0]).then(
      (res: any) => {
        console.log(res);
      },
      (error: any) => {
        console.log('Error occured');
      }
    );
  }
}
