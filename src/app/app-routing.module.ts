import {NgModule} from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesDetailComponent} from './heroes-detail/heroes-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroesDetailComponent}
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // 通常不会再路由模块申明组件
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule {
}
