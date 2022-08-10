package com.bugTracker.bugTracker.Repository;

import com.bugTracker.bugTracker.Model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}
