import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bug-tracker';
  icon = "./assets/bug_icon.png";
  tickets?: Ticket[];
  ticket: Ticket = new Ticket();
  id!: number;

  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
    this.getTicket();
  }

  private getTicket(){
    this.ticket = new Ticket();
    this.ticketService.getTicketById(this.ticket.id).subscribe( data => {
      this.ticket = data;}
    )}

  ticketDetails(id:number){
    // navigate to ticket-details component
    this.router.navigate(['ticket-details', id]);
  }

  goHome(){
    // navigate to home page
    this.router.navigate(['home-page']);
  }}
