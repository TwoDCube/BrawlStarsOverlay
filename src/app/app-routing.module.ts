import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import {BoardComponent} from './board/board.component'
import {ControlComponent} from './control/control.component'

const routes: Routes = [
  {path: '', component: BoardComponent},
  {path: 'controls', component: ControlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
