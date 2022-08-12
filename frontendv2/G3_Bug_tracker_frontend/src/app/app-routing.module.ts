import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: '', component: HomePageComponent},
  {path: 'update-user/:userId', component: UpdateUserComponent},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'tickets', component: TicketListComponent},
  {path: 'create-ticket', component: CreateTicketComponent},
  {path: 'update-ticket/:id', component: UpdateTicketComponent},
  {path: 'ticket-details/:id', component: TicketDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }