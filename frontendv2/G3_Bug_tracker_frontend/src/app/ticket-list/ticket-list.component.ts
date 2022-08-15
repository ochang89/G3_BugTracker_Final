import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/ticket';
import { TicketService } from '../ticket.service'
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {

  user?: User = new User();

  tickets?: Ticket[];
  searchText: any;

  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTickets();
  }

  private getTickets(){
    this.ticketService.getTicketsList().subscribe(data => {
      this.tickets = data;
    });
  }

  ticketDetails(id: number){
    this.router.navigate(['ticket-details', id]);
  }

  updateTicket(id: number){
    this.router.navigate(['update-ticket', id]);
  }

  deleteTicket(id: number){
    this.ticketService.deleteTicket(id).subscribe( data => {
      console.log(data);
      this.getTickets();
    })
  }

  
}