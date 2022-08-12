package com.bugTracker.bugTracker.Controller;

import com.bugTracker.bugTracker.Model.Ticket;
import com.bugTracker.bugTracker.Repository.TicketRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.bugTracker.bugTracker.ResourceNotFoundException.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:4200")
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

    @GetMapping("/tickets/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
        Ticket ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ticket does not exist with id : " + id));
        return ResponseEntity.ok(ticket);
    }

    @PostMapping({"/tickets"})
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return (Ticket)this.ticketRepository.save(ticket);
    }

    @DeleteMapping({"/tickets/{id}"})
    public ResponseEntity<Map<String, Boolean>> deleteTicket(@PathVariable Long id) {
        Ticket ticket = this.ticketRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id : " + id));
        this.ticketRepository.deleteById(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

    @PutMapping({"/tickets/{id}"})
    public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticketInput, @PathVariable Long id) {
        Ticket ticket = (Ticket)this.ticketRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id : " + id));
        ticket.setId(ticketInput.getId());
        ticket.setDescription(ticketInput.getDescription());
        ticket.setPriority(ticketInput.getPriority());
        ticket.setTimestamp(ticketInput.getTimestamp());
        Ticket updateTicket = ticketRepository.save(ticket);
        return ResponseEntity.ok(updateTicket);

    }
}