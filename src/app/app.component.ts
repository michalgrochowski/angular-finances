import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private firestore: AngularFirestore) {
    this._items = firestore.collection('users').valueChanges();
  }

  private _items: Observable<any[]>;

  get items(): Observable<any[]> {
    return this._items;
  }
}
