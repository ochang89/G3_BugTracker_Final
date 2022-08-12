import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  ticket: Ticket = new Ticket();
  constructor(private ticketService: TicketService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTicket(){
    this.ticketService.createTicket(this.ticket).subscribe( data =>{
      console.log(data);
      this.goToTicketList();
    },
    error => console.log(error));
  }

  goToTicketList(){
    this.router.navigate(['/tickets']);
  }
  
  
  onSubmit(){
    console.log(this.ticket);
    this.saveTicket();
  }
}
