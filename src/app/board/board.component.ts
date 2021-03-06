import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  info;

  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
    this.info = this.afStore.collection('info').doc('scores').valueChanges()
  }

}
