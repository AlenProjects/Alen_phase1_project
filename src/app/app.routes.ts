import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { NoSuchComponent } from "./no-such/no-such.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'client-list', component: ClientListComponent },
  { path: 'register-client', component: RegisterComponent },
  { path: 'schedule-meeting', component: ScheduleComponent },
  { path: '*', component: AppComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
