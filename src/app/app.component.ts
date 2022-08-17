import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-metaculture';
  currentRoute: any;
  constructor( private router:Router)
  {

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  )
      .subscribe(event => {
        this.currentRoute = event;
      });

  }
}
