import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { visitAll } from '@angular/compiler';
TimeAgo.addDefaultLocale(en);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  multi: any[] = [
    {
      "name": 'Posters',
      "series": [
        {
          "name": '19/08/22',
          "value": 62000000,
        },
        {
          "name": '20/08/22',
          "value": 73000000,
        },
        {
          "name": '21/08/22',
          "value": 89400000,
        },
      ],
    },

    {
      name: 'Courses',
      series: [
        {
          name: '19/08/22',
          value: 250000000,
        },
        {
          name: '20/08/22',
          value: 309000000,
        },
        {
          name: '21/08/22',
          value: 311000000,
        },
      ],
    },
  ];

  view: number[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Purchases';
  timeline: boolean = true;

  posterCount: any;
  orderCount: any;
  courseCount: any;
  todayOrderCount: any;
  todayRevenue: any;
  totalRevenue: any;
  timeAgo = new TimeAgo('en-US');
  contactingYou: any = [];

  // orders = [
  //   {
  //     posterID: 123,
  //     paid: 30,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 34,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 31,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 36,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 22,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 30,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 45,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },    {
  //     posterID: 123,
  //     paid: 67,
  //     date: Date.now(),
  //     name: 'Vivek',
  //     address: 'Hassan',
  //     phoneNumber: '7777777777',
  //     email: 'example@mail.com',
  //   },
  // ];

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let todayRevenue = 0;
    let totalRevenue = 0;
    this.dataService.getData().subscribe((val) => {
      this.contactingYou = val[0].reverse();

      this.posterCount = val[3].length;

      this.courseCount = val[1].length;

      this.orderCount = val[2].length;

      let xlist: any = [];
      let orderdPosters = val[2].map((val: any) => {
        return val.items;
      });

      orderdPosters.map((val: any) => {
        val?.forEach((element: any) => {
          xlist.push(element);
        });
      });

      console.log(xlist);

      // xlist.forEach((val: any) => {
      //   this.multi[0].series.push({
      //     name: new Date(val?.date),
      //     value: parseInt(val?.cost),
      //   });
      // });

      // xlist.forEach((val: any) => {
      //   this.multi[1].series.push({
      //     name: new Date(val?.date),
      //     value: parseInt(val?.cost),
      //   });
      // });



      console.log(this.multi);

      this.todayOrderCount = val[2].map((order: any) => {
        return this.isToday(new Date(order.date));
      }).length;

      val[2].map((order: any) => {
        if (this.isToday(new Date(order?.date))) {
          if(order?.amount)
            todayRevenue = todayRevenue + parseInt(order?.amount);
        }
      });

      val[2].map((order: any) => {
        if(order?.amount)
          totalRevenue = totalRevenue + parseInt(order?.amount) / 100;
      });

      this.todayRevenue = todayRevenue;
      this.totalRevenue = totalRevenue;

      console.log(this.todayRevenue);
    });

    // this.dataService.addPoster('orders',this.orders)
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  isToday(someDate: Date) {
    const today = new Date();
    if (today.toDateString() === someDate.toDateString()) {
      return true;
    } else return false;
  }

  logout() {
    this.authService.setLoginStatus('false');
    this.router.navigate(['login']);
  }
}
