import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateUserComponent} from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TicketListComponent,
    TicketComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    CreateTicketComponent,
    HomePageComponent,
    UpdateTicketComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

