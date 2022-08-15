import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseURL = "http://localhost:8080/tickets";

  constructor(private httpClient: HttpClient) { }

  getTicketsList(): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(`${this.baseURL}`);
  }

  createTicket(ticket: Ticket): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, ticket);
  }

  getTicketById(id: number): Observable<Ticket>{
    return this.httpClient.get<Ticket>(`${this.baseURL}/${id}`);
  }

  updateTicket(id: number, ticket: Ticket): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}