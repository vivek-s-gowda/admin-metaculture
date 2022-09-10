import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ordersList:any = [];
  
  ngOnInit(): void {
    this.dataService.getData().subscribe((values:any)=>{
      this.ordersList = values[2];
    })
  }

}
