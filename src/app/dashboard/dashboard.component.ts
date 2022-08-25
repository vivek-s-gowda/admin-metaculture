import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
TimeAgo.addDefaultLocale(en)

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  multi: any[] = [
    {
      name: 'Posters',
      series: [
        {
          name: '19/08/22',
          value: 62000000,
        },
        {
          name: '20/08/22',
          value: 73000000,
        },
        {
          name: '21/08/22',
          value: 89400000,
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
  timeAgo = new TimeAgo('en-US')

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

  constructor(private dataService: DataService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let todayRevenue = 0;
    let totalRevenue = 0;
    this.dataService.getData().subscribe((val) => {
      console.log(val)
      this.posterCount = val[2].length;

      this.courseCount = val[0].length

      this.orderCount = val[1].length;

      this.todayOrderCount = val[1].map((order: any) => {
        return this.isToday(new Date(order.date));
      }).length;

      val[0].map((order: any) => {
        if (this.isToday(new Date(order.date))) {
          todayRevenue = todayRevenue + parseInt(order.paid);
        }
      });

      val[1].map((order: any) => {
        totalRevenue = totalRevenue + parseInt(order.paid);
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
    this.authService.setLoginStatus("false");
    this.router.navigate(['login']);
  }
}
