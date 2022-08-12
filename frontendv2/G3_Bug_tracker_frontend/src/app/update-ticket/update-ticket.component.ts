import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  id!: number;
  ticket: Ticket = new Ticket();
  constructor(private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ticketService.getTicketById(this.id).subscribe(data => {
      this.ticket = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.ticketService.updateTicket(this.id, this.ticket).subscribe( data =>{
      this.goToTicketList();
    }
    , error => console.log(error));
  }

  goToTicketList(){
    this.router.navigate(['/tickets']);
  }

}
