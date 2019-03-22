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
    show: true,
    team1: '',
    score1: 0,
    score2: 0,
    team2: ''
  })

  teams;

  constructor(private fb: FormBuilder, private afStore: AngularFirestore) { }

  ngOnInit() {
    this.afStore.collection('info').doc('scores').valueChanges().subscribe((res: any) => {
      this.fg.patchValue({
        show: res.show,
        team1: res.team1,
        score1: res.score1,
        score2: res.score2,
        team2: res.team2
      })
    })
    this.fg.valueChanges.subscribe(async res => {
      await this.afStore.collection('info').doc('scores').update({
        show: res.show,
        team1: res.team1,
        score1: res.score1,
        score2: res.score2,
        team2: res.team2
      })
    })
    this.teams = this.afStore.collection('teams').valueChanges()
  }

}
