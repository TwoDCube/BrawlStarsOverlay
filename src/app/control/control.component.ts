import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  fg = this.fb.group({
    team1: this.fb.control(null),
    score1: this.fb.control(null),
    score2: this.fb.control(null),
    team2: this.fb.control(null)
  })

  constructor(private fb: FormBuilder, private afStore: AngularFirestore) { }

  ngOnInit() {
  }

}
