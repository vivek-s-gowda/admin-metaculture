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
  deliveredList: any = [];
  notDeliveredList: any = [];
  ngOnInit(): void {
    this.dataService.getData().subscribe((values:any)=>{
      this.ordersList = values[2].reverse();

      this.deliveredList = this.ordersList.map((value:any)=>{
        if(value.delivered)
        {
          return value
        }
        else
         return null;
      })

      this.notDeliveredList = this.ordersList.map((value:any)=>{
        if(!value.delivered)
        {
          return value
        }
        else
        return null;
      })
    })
  }

  markDeliverd(index: number) {
    this.ordersList[index].delivered = true;
    this.dataService.addPoster('orders', this.ordersList);
  }

  markNotDeliverd(index: number){
    this.ordersList[index].delivered = false;
    this.dataService.addPoster('orders', this.ordersList);
  }

}
