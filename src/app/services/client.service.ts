import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({ providedIn: 'root' })
export class clientService {
  clientChanged = new Subject<Client[]>();
  startEditingClient = new Subject<number>();
  constructor() {}

  private clients: Client[] = [
    new Client(
      'gowri',
      'G',
      'gowri@gmail',
      'vizag',
      'timehunt',
      'employee working hours',
      'venkat manga gowri',
      '2000-02-11'
    ),
  ];
  getClients() {
    return this.clients.slice();
  }
  getClient(i: number) {
    return this.clients[i];
  }
  addClient(client: Client) {
    this.clients.push(client);
    this.clientChanged.next(this.clients.slice());
  }
  updateClient(i: number, newClient: Client) {
    this.clients[i] = newClient;
    this.clientChanged.next(this.clients.slice());
  }

  deleteClient(i: number) {
    this.clients.splice(i, 1);
    this.clientChanged.next(this.clients.slice());
  }
}
