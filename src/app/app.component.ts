import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB4ythd0qpjOnSXo4Oh3TWSkKuDwwwW-PA',
      authDomain: 'ng-recipe-book-51fc0.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
