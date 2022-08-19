import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue, get, child, set } from 'firebase/database';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = '/metaculture';
  subject$ = new Subject();
  numberExists$ = new Subject();
  user: AngularFireList<any>;
  db:any;
  constructor(
    private fireBase: AngularFireDatabase,
    private firestore: AngularFirestore,
    private http: HttpClient

  ) {
    this.user = fireBase.list(this.dbPath);
  }

  getData(): Observable<any> {
    return this.user.valueChanges();
  }

  getPostersCount() {
    this.user.valueChanges().subscribe(val=>{
      return val[0].length;
    });
  }

  addPoster(id: string, data: any): any {
    return this.user.set(id, data);
  }
}
