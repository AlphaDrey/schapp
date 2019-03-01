import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'updates', loadChildren: './updates/updates.module#UpdatesPageModule' },
  { path: 'scores', loadChildren: './scores/scores.module#ScoresPageModule' },
  { path: 'students-details', loadChildren: './students-details/students-details.module#StudentsDetailsPageModule' },
  { path: 'time-tables', loadChildren: './time-tables/time-tables.module#TimeTablesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
