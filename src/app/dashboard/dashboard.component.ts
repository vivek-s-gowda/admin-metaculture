import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  multi: any[] = [
    {
      "name": "Posters",
      "series": [
        {
          "name": "19/08/22",
          "value": 62000000
        },
        {
          "name": "20/08/22",
          "value": 73000000
        },
        {
          "name": "21/08/22",
          "value": 89400000
        }
      ]
    },
  
    {
      "name": "Courses",
      "series": [
        {
          "name": "19/08/22",
          "value": 250000000
        },
        {
          "name": "20/08/22",
          "value": 309000000
        },
        {
          "name": "21/08/22",
          "value": 311000000
        }
      ]
    }

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
  ngOnInit(): void {
  }

  constructor() {
    // Object.assign(this, { this.multi });
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
}
