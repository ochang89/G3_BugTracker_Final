package com.bugTracker.bugTracker.Controller;

import com.bugTracker.bugTracker.Model.Ticket;
import com.bugTracker.bugTracker.Repository.TicketRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TicketController {
    @Autowired
    private TicketRepository ticketRepository;

    public TicketController() {
    }

    @GetMapping({"/tickets"})
    public List<Ticket> getTickets() {
        return this.ticketRepository.findAll();
    }

    @PostMapping({"/create_ticket"})
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return (Ticket)this.ticketRepository.save(ticket);
    }

    @DeleteMapping({"/delete_ticket/{id}"})
    public void deleteTicket(@PathVariable long id) {
        this.ticketRepository.deleteById(id);
    }

    @PutMapping({"/update_ticket/{id}"})
    public Ticket updateTicket(@RequestBody Ticket ticketInput, @PathVariable long id) {
        Ticket ticket = (Ticket)this.ticketRepository.findById(id).get();
        ticket.setId(ticketInput.getId());
        ticket.setDescription(ticketInput.getDescription());
        ticket.setPriority(ticketInput.getPriority());
        ticket.setTimestamp(ticketInput.getTimestamp());
        return (Ticket)this.ticketRepository.save(ticket);
    }
}
