import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyResultBoardComponent } from './components/key-result-board/key-result-board.component';

const routes: Routes = [
  { path: 'key-result-board', component: KeyResultBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
